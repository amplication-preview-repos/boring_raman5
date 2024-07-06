import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { WaterQualityReportController } from "../waterQualityReport.controller";
import { WaterQualityReportService } from "../waterQualityReport.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  contaminants: "exampleContaminants",
  createdAt: new Date(),
  id: "exampleId",
  phLevel: 42.42,
  reportDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  contaminants: "exampleContaminants",
  createdAt: new Date(),
  id: "exampleId",
  phLevel: 42.42,
  reportDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    contaminants: "exampleContaminants",
    createdAt: new Date(),
    id: "exampleId",
    phLevel: 42.42,
    reportDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  contaminants: "exampleContaminants",
  createdAt: new Date(),
  id: "exampleId",
  phLevel: 42.42,
  reportDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createWaterQualityReport() {
    return CREATE_RESULT;
  },
  waterQualityReports: () => FIND_MANY_RESULT,
  waterQualityReport: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("WaterQualityReport", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: WaterQualityReportService,
          useValue: service,
        },
      ],
      controllers: [WaterQualityReportController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /waterQualityReports", async () => {
    await request(app.getHttpServer())
      .post("/waterQualityReports")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        reportDate: CREATE_RESULT.reportDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /waterQualityReports", async () => {
    await request(app.getHttpServer())
      .get("/waterQualityReports")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          reportDate: FIND_MANY_RESULT[0].reportDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /waterQualityReports/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/waterQualityReports"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /waterQualityReports/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/waterQualityReports"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        reportDate: FIND_ONE_RESULT.reportDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /waterQualityReports existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/waterQualityReports")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        reportDate: CREATE_RESULT.reportDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/waterQualityReports")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});

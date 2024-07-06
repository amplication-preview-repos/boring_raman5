/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { WaterQualityReportService } from "../waterQualityReport.service";
import { WaterQualityReportCreateInput } from "./WaterQualityReportCreateInput";
import { WaterQualityReport } from "./WaterQualityReport";
import { WaterQualityReportFindManyArgs } from "./WaterQualityReportFindManyArgs";
import { WaterQualityReportWhereUniqueInput } from "./WaterQualityReportWhereUniqueInput";
import { WaterQualityReportUpdateInput } from "./WaterQualityReportUpdateInput";

export class WaterQualityReportControllerBase {
  constructor(protected readonly service: WaterQualityReportService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: WaterQualityReport })
  async createWaterQualityReport(
    @common.Body() data: WaterQualityReportCreateInput
  ): Promise<WaterQualityReport> {
    return await this.service.createWaterQualityReport({
      data: {
        ...data,

        reservoir: data.reservoir
          ? {
              connect: data.reservoir,
            }
          : undefined,
      },
      select: {
        contaminants: true,
        createdAt: true,
        id: true,
        phLevel: true,
        reportDate: true,

        reservoir: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [WaterQualityReport] })
  @ApiNestedQuery(WaterQualityReportFindManyArgs)
  async waterQualityReports(
    @common.Req() request: Request
  ): Promise<WaterQualityReport[]> {
    const args = plainToClass(WaterQualityReportFindManyArgs, request.query);
    return this.service.waterQualityReports({
      ...args,
      select: {
        contaminants: true,
        createdAt: true,
        id: true,
        phLevel: true,
        reportDate: true,

        reservoir: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: WaterQualityReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async waterQualityReport(
    @common.Param() params: WaterQualityReportWhereUniqueInput
  ): Promise<WaterQualityReport | null> {
    const result = await this.service.waterQualityReport({
      where: params,
      select: {
        contaminants: true,
        createdAt: true,
        id: true,
        phLevel: true,
        reportDate: true,

        reservoir: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: WaterQualityReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWaterQualityReport(
    @common.Param() params: WaterQualityReportWhereUniqueInput,
    @common.Body() data: WaterQualityReportUpdateInput
  ): Promise<WaterQualityReport | null> {
    try {
      return await this.service.updateWaterQualityReport({
        where: params,
        data: {
          ...data,

          reservoir: data.reservoir
            ? {
                connect: data.reservoir,
              }
            : undefined,
        },
        select: {
          contaminants: true,
          createdAt: true,
          id: true,
          phLevel: true,
          reportDate: true,

          reservoir: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: WaterQualityReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWaterQualityReport(
    @common.Param() params: WaterQualityReportWhereUniqueInput
  ): Promise<WaterQualityReport | null> {
    try {
      return await this.service.deleteWaterQualityReport({
        where: params,
        select: {
          contaminants: true,
          createdAt: true,
          id: true,
          phLevel: true,
          reportDate: true,

          reservoir: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

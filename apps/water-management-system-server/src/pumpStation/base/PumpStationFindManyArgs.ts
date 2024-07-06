/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PumpStationWhereInput } from "./PumpStationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PumpStationOrderByInput } from "./PumpStationOrderByInput";

@ArgsType()
class PumpStationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PumpStationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PumpStationWhereInput, { nullable: true })
  @Type(() => PumpStationWhereInput)
  where?: PumpStationWhereInput;

  @ApiProperty({
    required: false,
    type: [PumpStationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PumpStationOrderByInput], { nullable: true })
  @Type(() => PumpStationOrderByInput)
  orderBy?: Array<PumpStationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PumpStationFindManyArgs as PumpStationFindManyArgs };
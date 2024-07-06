/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WaterQualityReportWhereInput } from "./WaterQualityReportWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WaterQualityReportListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WaterQualityReportWhereInput,
  })
  @ValidateNested()
  @Type(() => WaterQualityReportWhereInput)
  @IsOptional()
  @Field(() => WaterQualityReportWhereInput, {
    nullable: true,
  })
  every?: WaterQualityReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => WaterQualityReportWhereInput,
  })
  @ValidateNested()
  @Type(() => WaterQualityReportWhereInput)
  @IsOptional()
  @Field(() => WaterQualityReportWhereInput, {
    nullable: true,
  })
  some?: WaterQualityReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => WaterQualityReportWhereInput,
  })
  @ValidateNested()
  @Type(() => WaterQualityReportWhereInput)
  @IsOptional()
  @Field(() => WaterQualityReportWhereInput, {
    nullable: true,
  })
  none?: WaterQualityReportWhereInput;
}
export { WaterQualityReportListRelationFilter as WaterQualityReportListRelationFilter };

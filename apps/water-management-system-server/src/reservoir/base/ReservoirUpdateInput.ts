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
import {
  IsInt,
  Min,
  Max,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { WaterQualityReportUpdateManyWithoutReservoirsInput } from "./WaterQualityReportUpdateManyWithoutReservoirsInput";
import { Type } from "class-transformer";

@InputType()
class ReservoirUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  capacity?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  waterLevel?: number | null;

  @ApiProperty({
    required: false,
    type: () => WaterQualityReportUpdateManyWithoutReservoirsInput,
  })
  @ValidateNested()
  @Type(() => WaterQualityReportUpdateManyWithoutReservoirsInput)
  @IsOptional()
  @Field(() => WaterQualityReportUpdateManyWithoutReservoirsInput, {
    nullable: true,
  })
  waterQualityReports?: WaterQualityReportUpdateManyWithoutReservoirsInput;
}

export { ReservoirUpdateInput as ReservoirUpdateInput };

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
import { ReservoirWhereInput } from "./ReservoirWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ReservoirOrderByInput } from "./ReservoirOrderByInput";

@ArgsType()
class ReservoirFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ReservoirWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ReservoirWhereInput, { nullable: true })
  @Type(() => ReservoirWhereInput)
  where?: ReservoirWhereInput;

  @ApiProperty({
    required: false,
    type: [ReservoirOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ReservoirOrderByInput], { nullable: true })
  @Type(() => ReservoirOrderByInput)
  orderBy?: Array<ReservoirOrderByInput>;

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

export { ReservoirFindManyArgs as ReservoirFindManyArgs };
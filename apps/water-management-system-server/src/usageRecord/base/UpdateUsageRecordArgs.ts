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
import { UsageRecordWhereUniqueInput } from "./UsageRecordWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UsageRecordUpdateInput } from "./UsageRecordUpdateInput";

@ArgsType()
class UpdateUsageRecordArgs {
  @ApiProperty({
    required: true,
    type: () => UsageRecordWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UsageRecordWhereUniqueInput)
  @Field(() => UsageRecordWhereUniqueInput, { nullable: false })
  where!: UsageRecordWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UsageRecordUpdateInput,
  })
  @ValidateNested()
  @Type(() => UsageRecordUpdateInput)
  @Field(() => UsageRecordUpdateInput, { nullable: false })
  data!: UsageRecordUpdateInput;
}

export { UpdateUsageRecordArgs as UpdateUsageRecordArgs };

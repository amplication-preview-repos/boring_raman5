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
import { ReservoirWhereUniqueInput } from "./ReservoirWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ReservoirUpdateInput } from "./ReservoirUpdateInput";

@ArgsType()
class UpdateReservoirArgs {
  @ApiProperty({
    required: true,
    type: () => ReservoirWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReservoirWhereUniqueInput)
  @Field(() => ReservoirWhereUniqueInput, { nullable: false })
  where!: ReservoirWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ReservoirUpdateInput,
  })
  @ValidateNested()
  @Type(() => ReservoirUpdateInput)
  @Field(() => ReservoirUpdateInput, { nullable: false })
  data!: ReservoirUpdateInput;
}

export { UpdateReservoirArgs as UpdateReservoirArgs };
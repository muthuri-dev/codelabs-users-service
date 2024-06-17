import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class UpdateUsernameDto {
  @Field(() => ID)
  id: string;

  @Field()
  username: string;
}

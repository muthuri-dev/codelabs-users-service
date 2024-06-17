import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class UpdateUserPreferenceDto {
  @Field(() => ID)
  id: string;

  @Field(() => [String])
  preferences: string[];
}

import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields:"id")')
export class User {
  @Field(() => ID)
  db_id: string;

  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  profile_image: string;

  @Field(() => [String], { nullable: true })
  preferences?: string[];
}

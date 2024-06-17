import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
//import { User } from './user.entity';

@ObjectType()
@Directive('@key(fields:"id")')
export class Course {
  @Field(() => ID)
  id: string;

  //   @Field(() => User)
  //   user?: User;
}

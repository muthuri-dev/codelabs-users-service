import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/entities/user.entity';

@ObjectType()
export class UserErrorType {
  @Field()
  message: string;

  @Field()
  code: string;
}

@ObjectType()
export class UserResponse {
  @Field(() => User)
  user: User;

  @Field(() => UserErrorType, { nullable: true })
  error?: UserErrorType;
}

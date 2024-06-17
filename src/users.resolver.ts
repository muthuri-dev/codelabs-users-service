import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UserResponse } from './types/user.types';
import { UpdateUserPreferenceDto } from './dto/update-user-preferences.dto';
import { UpdateUsernameDto } from './dto/update-username.dto';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => UserResponse)
  async updateUserPreferences(
    @Args('userPreferenceInput') updatePreferences: UpdateUserPreferenceDto,
  ): Promise<UserResponse> {
    return await this.usersService.updateUserPreferences(updatePreferences);
  }

  @Query(() => User)
  async getUserByEmail(@Args('email') email: string): Promise<User> {
    return await this.usersService.getUserByEmail(email);
  }

  @Mutation(() => UserResponse)
  async updateUsername(
    @Args('username') updateUsername: UpdateUsernameDto,
  ): Promise<UserResponse> {
    return await this.updateUsername(updateUsername);
  }

  @Query(() => User)
  async getUserById(@Args('id') id: string): Promise<User> {
    return await this.usersService.getUserById(id);
  }

  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    return await this.usersService.getAllUsers();
  }
}

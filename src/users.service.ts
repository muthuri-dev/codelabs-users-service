import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismadbService } from './prismadb/prismadb.service';
import { UpdateUserPreferenceDto } from './dto/update-user-preferences.dto';
import { UserResponse } from './types/user.types';
import { User } from './entities/user.entity';
import { UpdateUsernameDto } from './dto/update-username.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismadbService) {}

  async updateUserPreferences(
    userPreferences: UpdateUserPreferenceDto,
  ): Promise<UserResponse> {
    const { id, preferences } = userPreferences;

    const isUser = await this.prismaService.user.findUnique({ where: { id } });
    if (!isUser) throw new NotFoundException('User not found');

    const user = await this.prismaService.user.update({
      where: { id: id },
      data: { preferences },
    });
    return { user };
  }

  async getUserByEmail(email: string): Promise<User> {
    return await this.prismaService.user.findUnique({ where: { email } });
  }

  async updateUsername(
    updateUsername: UpdateUsernameDto,
  ): Promise<UserResponse> {
    const { id, username } = updateUsername;
    const user = await this.prismaService.user.update({
      where: { id },
      data: { username },
    });

    return { user };
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.prismaService.user.findUnique({ where: { id } });
    if (!user) throw new BadRequestException('User does not exist');
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return await this.prismaService.user.findMany();
  }
}

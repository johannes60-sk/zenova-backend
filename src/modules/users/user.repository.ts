import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma-module/prisma.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(user: UserDto) {
    const newUser = await this.prisma.user.create({
      data: {
        email: user.email,
      },
    });
    return newUser;
  }
}

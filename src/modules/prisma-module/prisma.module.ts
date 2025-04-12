// src/prisma/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { SeedService } from './seed';
import { PrismaController } from './prisma.controller';

@Global()
@Module({
  controllers: [PrismaController],
  providers: [PrismaService, SeedService],
  exports: [PrismaService],
})
export class PrismaModule {}

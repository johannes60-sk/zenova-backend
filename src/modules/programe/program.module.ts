import { Module } from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramController } from './program.controller';
import { ProgramRepository } from './program.repository';
import { PrismaService } from '../prisma-module/prisma.service';

@Module({
  controllers: [ProgramController],
  providers: [ProgramService, ProgramRepository, PrismaService],
})
export class ProgramModule {}

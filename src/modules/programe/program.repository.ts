import { Injectable } from '@nestjs/common';
import { Prisma, VisibilityEnum } from '@prisma/client';
import { PrismaService } from '../prisma-module/prisma.service';

@Injectable()
export class ProgramRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.ProgramCreateInput) {
    return this.prisma.program.create({
      data,
      include: { programSchedule: true },
    });
  }

  findAllByUser(userId: string) {
    return this.prisma.program.findMany({ where: { userId } });
  }

  findOne(id: string) {
    return this.prisma.program.findUnique({
      where: { id },
      include: { programSchedule: true, visibilityLogs: true },
    });
  }

  update(id: string, data: Prisma.ProgramUpdateInput) {
    return this.prisma.program.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.program.delete({ where: { id } });
  }

  toggleVisibility(id: string, visibility: VisibilityEnum) {
    return this.prisma.program.update({
      where: { id },
      data: { isPublic: visibility === 'PUBLIC' },
    });
  }

  createProgramSchedule(data: Prisma.ProgramScheduleCreateInput) {
    return this.prisma.programSchedule.create({ data });
  }

  findAllProgramSchedules(programId: string) {
    return this.prisma.programSchedule.findMany({
      where: { programId },
    });
  }

  findOneProgramSchedule(id: string) {
    return this.prisma.programSchedule.findUnique({
      where: { id },
    });
  }

  updateProgramSchedule(id: string, data: Prisma.ProgramScheduleUpdateInput) {
    return this.prisma.programSchedule.update({ where: { id }, data });
  }

  deleteProgramSchedule(id: string) {
    return this.prisma.programSchedule.delete({ where: { id } });
  }

  findAllProgramSchedulesByUser(userId: string) {
    return this.prisma.programSchedule.findMany({
      where: { program: { userId } },
    });
  }

  findAllProgramSchedulesByProgram(programId: string) {
    return this.prisma.programSchedule.findMany({
      where: { programId },
    });
  }
}

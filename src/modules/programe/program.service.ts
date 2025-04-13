import { Injectable } from '@nestjs/common';
import { ProgramRepository } from './program.repository';
import { VisibilityEnum } from '@prisma/client';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';

@Injectable()
export class ProgramService {
  constructor(private readonly programRepo: ProgramRepository) {}

  async createProgram(dto: CreateProgramDto) {
    const { userId, programSchedule, ...programData } = dto;

    const program = await this.programRepo.create({
      user: {
        connect: { id: userId }, // Connexion avec l'utilisateur via userId
      },
      ...programData, // Le reste des données (nom, description, etc.)
      programSchedule: {
        create: programSchedule?.map((schedule) => ({
          dayOfWeek: schedule.dayOfWeek,
          time: schedule.time,
        })),
      },
    });
    return program;
  }

  findProgramByUser(userId: string) {
    return this.programRepo.findAllByUser(userId);
  }

  findOneProgram(id: string) {
    return this.programRepo.findOne(id);
  }

  updateProgram(id: string, dto: UpdateProgramDto) {
    const { programSchedule, ...rest } = dto;

    return this.programRepo.update(id, {
      ...rest,
      programSchedule: programSchedule
        ? {
            deleteMany: {}, // si tu veux reset avant (optionnel)
            create: programSchedule.map((s) => ({
              dayOfWeek: s.dayOfWeek,
              time: s.time,
            })),
          }
        : undefined,
    });
  }
  deleteProgram(id: string) {
    return this.programRepo.delete(id);
  }

  toggleVisibilityProgram(id: string, visibility: VisibilityEnum) {
    return this.programRepo.toggleVisibility(id, visibility);
  }
}

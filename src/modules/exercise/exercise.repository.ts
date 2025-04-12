import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/exercise.dto';
import { PrismaService } from '../prisma-module/prisma.service';

@Injectable()
export class ExerciseRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateExerciseDto) {
    return this.prisma.exercise.create({
      data: {
        name: dto.name,
        description: dto.description,
        image: dto.image,
        target: dto.target,
        bodyPart: dto.bodyPart,
        category: {
          connect: { id: dto.categoryId },
        },
        subCategory: {
          connect: { id: dto.subCategoryId },
        },
      },
      include: {
        category: true,
        subCategory: true,
      },
    });
  }

  async findAll(page: number = 1) {
    const pageSize = 20;
    const skip = (page - 1) * pageSize;

    return this.prisma.exercise.findMany({
      skip,
      take: pageSize,
      include: {
        category: true,
        subCategory: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.exercise.findUnique({
      where: { id },
      include: {
        category: true,
        subCategory: true,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.exercise.delete({
      where: { id },
    });
  }
}

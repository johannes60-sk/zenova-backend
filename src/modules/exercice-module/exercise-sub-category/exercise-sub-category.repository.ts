import { Injectable } from '@nestjs/common';
import { CreateExerciseSubCategoryDto } from './dto/exercise-sub-category.dto';
import { PrismaService } from 'src/modules/prisma-module/prisma.service';

@Injectable()
export class ExerciseSubCategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateExerciseSubCategoryDto) {
    return this.prisma.exerciseSubCategory.create({
      data: {
        name: dto.name,
        category: {
          connect: { id: dto.categoryId },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.exerciseSubCategory.findMany();
  }

  async findById(id: number) {
    return this.prisma.exerciseSubCategory.findUnique({
      where: { id },
    });
  }

  async remove(id: number) {
    return this.prisma.exerciseSubCategory.delete({
      where: { id },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { ExerciseRepository } from './exercise.repository';

@Injectable()
export class ExerciseService {
  constructor(private readonly exerciseRepository: ExerciseRepository) {}

  async findAllExercice() {
    return this.exerciseRepository.findAll();
  }

  async findOneExercice(id: number) {
    return this.exerciseRepository.findOne(id);
  }

  async removeExercice(id: number) {
    return this.exerciseRepository.remove(id);
  }
}

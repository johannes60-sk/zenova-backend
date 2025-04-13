import { Controller, Get, Param } from '@nestjs/common';
import { ExerciseService } from './exercise.service';

@Controller('workouts')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  async findAllExercice() {
    return this.exerciseService.findAllExercice();
  }

  @Get(':id')
  async findOneExercice(@Param('id') id: number) {
    return this.exerciseService.findOneExercice(id);
  }

  removeExercice(@Param('id') id: number) {
    return this.exerciseService.removeExercice(id);
  }
}

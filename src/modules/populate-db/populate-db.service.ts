import { Injectable } from '@nestjs/common';

type ExerciseDBProps = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
};

@Injectable()
export class PopulateDbService {}

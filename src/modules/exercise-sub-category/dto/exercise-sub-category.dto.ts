import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateExerciseSubCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  categoryId: number;
}

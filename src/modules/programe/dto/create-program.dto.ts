import { WeekDay } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class ProgramScheduleDto {
  @IsString()
  dayOfWeek: WeekDay;
  @IsString()
  time: string;
}

export class CreateProgramDto {
  @IsString()
  userId: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;

  @IsOptional()
  @IsBoolean()
  notification?: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProgramScheduleDto)
  programSchedule?: ProgramScheduleDto[];
}

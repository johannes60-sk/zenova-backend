import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProgramService } from './program.service';
import { VisibilityEnum } from '@prisma/client';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';

@Controller('create-program')
export class ProgramController {
  constructor(private readonly programService: ProgramService) {}

  @Post()
  create(@Body() dto: CreateProgramDto) {
    return this.programService.createProgram(dto);
  }

  @Get('user/:userId')
  findAllByUser(@Param('userId') userId: string) {
    return this.programService.findProgramByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programService.findOneProgram(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProgramDto) {
    return this.programService.updateProgram(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.programService.deleteProgram(id);
  }

  @Patch(':id/visibility')
  toggleVisibility(
    @Param('id') id: string,
    @Body('visibility') visibility: VisibilityEnum,
  ) {
    return this.programService.toggleVisibilityProgram(id, visibility);
  }
}

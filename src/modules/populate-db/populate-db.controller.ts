import { Controller, Get } from '@nestjs/common';
import { PopulateDbService } from './populate-db.service';

@Controller('populate-db')
export class PoupulateDbController {
  // constructor(private readonly populateDbService: PopulateDbService) {}
  // @Get()
  // async populateDatabase() {
  //   await this.populateDbService.populateDatabase();
  //   return { message: 'DB populated!' };
  // }
}

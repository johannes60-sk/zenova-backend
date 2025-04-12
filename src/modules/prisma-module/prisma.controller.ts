import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed';

@Controller('prisma')
export class PrismaController {
  constructor(private readonly seedService: SeedService) {}
  @Get('populate-db')
  async populateDb() {
    await this.seedService.populateDb();
    return { message: 'Database populated successfully' };
  }
}

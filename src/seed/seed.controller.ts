import { Controller, Get, Body, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  create() {
    return this.seedService.executeSeed();
  }

  @Delete()
  delete() {
    return this.seedService.executeDeleteSeed();
  }
}

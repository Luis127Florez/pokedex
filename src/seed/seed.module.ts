import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PoquemonSchema,
  Poquemons,
} from 'src/poquemon/entities/poquemon.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    CommonModule,
    MongooseModule.forFeature([
      {
        name: Poquemons.name,
        schema: PoquemonSchema,
      },
    ]),
  ],
})
export class SeedModule {}

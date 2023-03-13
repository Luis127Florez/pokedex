import { Module } from '@nestjs/common';
import { PoquemonService } from './poquemon.service';
import { PoquemonController } from './poquemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Poquemons, PoquemonSchema } from './entities/poquemon.entity';

@Module({
  controllers: [PoquemonController],
  providers: [PoquemonService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Poquemons.name,
        schema: PoquemonSchema,
      },
    ]),
  ],
})
export class PoquemonModule {}

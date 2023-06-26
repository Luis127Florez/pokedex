import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PoquemonModule } from './poquemon/poquemon.module';
import { SeedModule } from './seed/seed.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { EnvVariables } from './config/envConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvVariables],
    }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }),
    PoquemonModule,
    MongooseModule.forRoot(process.env.MONGODB_URL),
    SeedModule,
    CommonModule,
  ],
})
export class AppModule {}

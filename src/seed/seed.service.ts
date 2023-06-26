import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Poquemons } from 'src/poquemon/entities/poquemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { PokeResponse } from './interfaces/poke-interface';
import { axiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Poquemons.name)
    private readonly poquemonModel: Model<Poquemons>,
    private readonly http: axiosAdapter,
  ) {}
  async executeSeed() {
    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?offset=20&limit=50',
    );
    const { results } = data;
    const newResult = [];
    for (let i = 0; i < results.length; i++) {
      newResult.push({ name: results[i]?.name, No: i });
    }
    const response = await this.poquemonModel.insertMany(newResult);
    return response;
  }

  async executeDeleteSeed() {
    const respuesta = await this.poquemonModel.deleteMany({});
    return respuesta;
  }
}

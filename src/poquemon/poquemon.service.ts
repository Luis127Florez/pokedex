import {
  BadRequestException,
  HttpCode,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isString } from 'class-validator';
import { isObjectIdOrHexString, Model } from 'mongoose';
import { CreatePoquemonDto } from './dto/create-poquemon.dto';
import { UpdatePoquemonDto } from './dto/update-poquemon.dto';
import { Poquemons } from './entities/poquemon.entity';

@Injectable()
export class PoquemonService {
  constructor(
    @InjectModel(Poquemons.name)
    private readonly poquemonModel: Model<Poquemons>,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  async create(createPoquemonDto: CreatePoquemonDto) {
    try {
      const data = await this.poquemonModel.create(createPoquemonDto);
      return data;
    } catch (error) {
      if ((error.code = 11000))
        throw new BadRequestException(
          'Ya existe un poke con algunos de estos da estos datos',
        );
      throw new InternalServerErrorException('hable con el admin');
    }
  }

  async findAll({ limit = 10, offset = 0 }) {
    const data = await this.poquemonModel.find().limit(limit).skip(offset);
    return data;
  }

  async findOne(term: string) {
    console.log(term);
    try {
      let data;
      if (!isNaN(+term)) {
        data = await this.poquemonModel.find({ No: term });
        return data;
      }
      if (isObjectIdOrHexString(term)) {
        data = await this.poquemonModel.find({ _id: term });
        return data;
      }
      if (isString(term)) {
        data = await this.poquemonModel.find({ name: term });
        return data;
      }
      if (!data) throw new Error('debe asignar un dato de búsqueda');
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('hable con el admin');
    }
  }

  async update(term: string, updatePoquemonDto: UpdatePoquemonDto) {
    try {
      const poquemon = await this.findOne(term);
      console.log(poquemon[0]);
      await poquemon[0].updateOne(updatePoquemonDto);
      return { ...poquemon[0].toJSON(), ...updatePoquemonDto };
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          'Ya existe un poke con algunos de estos da estos datos',
        );
      }
      console.log(error);
      throw new InternalServerErrorException('hable con el admin');
    }
  }

  async remove(id: string) {
    const response = await this.poquemonModel.findByIdAndDelete({
      _id: id,
    });
    if (!response)
      throw new BadRequestException('No se elimino ningún Pokemon');
    return response;
  }
}

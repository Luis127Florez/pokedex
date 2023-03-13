import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PoquemonService } from './poquemon.service';
import { CreatePoquemonDto } from './dto/create-poquemon.dto';
import { UpdatePoquemonDto } from './dto/update-poquemon.dto';

@Controller('poquemon')
export class PoquemonController {
  constructor(private readonly poquemonService: PoquemonService) {}

  @Post()
  create(@Body() createPoquemonDto: CreatePoquemonDto) {
    return this.poquemonService.create(createPoquemonDto);
  }

  @Get()
  findAll() {
    return this.poquemonService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.poquemonService.findOne(term);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePoquemonDto: UpdatePoquemonDto,
  ) {
    return this.poquemonService.update(id, updatePoquemonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.poquemonService.remove(id);
  }
}

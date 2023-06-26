import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { PoquemonService } from './poquemon.service';
import { CreatePoquemonDto } from './dto/create-poquemon.dto';
import { UpdatePoquemonDto } from './dto/update-poquemon.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';
import { QueryParamsDto } from 'src/common/DTOs/QueryParamsDto';

@Controller('Pokemon')
export class PoquemonController {
  constructor(private readonly poquemonService: PoquemonService) {}

  @Post()
  create(@Body() createPoquemonDto: CreatePoquemonDto) {
    return this.poquemonService.create(createPoquemonDto);
  }

  @Get()
  findAll(@Query() queryParam: QueryParamsDto) {
    return this.poquemonService.findAll(queryParam);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.poquemonService.findOne(term);
  }

  @Put(':term')
  update(
    @Param('term') term: string,
    @Body() updatePoquemonDto: UpdatePoquemonDto,
  ) {
    return this.poquemonService.update(term, updatePoquemonDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.poquemonService.remove(id);
  }
}

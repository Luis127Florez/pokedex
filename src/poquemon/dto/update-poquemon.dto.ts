import { PartialType } from '@nestjs/mapped-types';
import { CreatePoquemonDto } from './create-poquemon.dto';

export class UpdatePoquemonDto extends PartialType(CreatePoquemonDto) {}

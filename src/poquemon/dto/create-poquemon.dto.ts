import { IsString, IsInt, MinLength, IsPositive } from 'class-validator';

export class CreatePoquemonDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsInt()
  @IsPositive()
  No: number;
}

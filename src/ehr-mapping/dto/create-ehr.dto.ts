import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEHRDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}

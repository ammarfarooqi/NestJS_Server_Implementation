import { isNotEmpty, IsNotEmpty, IsOptional } from 'class-validator';

export class getTaskDTO {
  @IsOptional()
  @IsNotEmpty()
  search: string;
  @IsOptional()
  @IsNotEmpty()
  filter: string;
}

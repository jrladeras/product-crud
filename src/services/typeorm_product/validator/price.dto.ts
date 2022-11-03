import { IsBoolean, IsDecimal, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreatePriceDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsInt()
  @IsNotEmpty()
  price: number;

  @IsInt()
  compare_price: number;
}

export class UpdatePriceDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDecimal()
  @IsNotEmpty()
  price: number;

  @IsDecimal()
  compare_price: number;

  @IsBoolean()
  status: boolean;
}
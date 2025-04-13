import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class UserDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  id?: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password?: string;

  @IsNotEmpty()
  @IsString()
  createdAt?: Date;

  @IsNotEmpty()
  updatedAt?: Date;

  @IsNotEmpty()
  isVerified?: boolean;
}

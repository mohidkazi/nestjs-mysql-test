import {
    IsOptional,
    IsString,
    IsUUID,
    IsNumber
} from 'class-validator'

export class AddUserDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    alias: string;
}

export class GetUsersDto {
    @IsUUID()
    id: string

    @IsString()
    name: string;

    @IsString()
    alias: string;

    @IsNumber()
    isDeleted: number
}
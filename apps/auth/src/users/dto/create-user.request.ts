import { IsEmail, IsNotEmpty, IsString, isString } from "class-validator";

export class CreateUserRequest {
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
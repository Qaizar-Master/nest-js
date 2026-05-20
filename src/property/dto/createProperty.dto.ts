import { IsInt, IsPositive, IsString, Length } from "class-validator";

export class CreatePropertyDto {
    @IsString() // instead of putting always true here inside as an object 
    // we write it directly inside the validationpipe under controller.
    @Length(2,10, {message : 'error on length'}) // makes sure that the input length is between 2 and 10.
    name!: string;

    @IsString()
    description!: string;

    @IsInt()
    @IsPositive()
    area!: number;

    @IsInt()
    @IsPositive()
    price!: number;
}
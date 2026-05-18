import { IsInt, IsPositive, IsString, Length } from "class-validator";

export class CreatePropertyDto {
    @IsString() // instead of putting always true here inside as an object 
    // we write it directly inside the validationpipe under controller.
    @Length(2,10, {message : 'error on length'}) // makes sure that the input length is between 2 and 10.
    name!: string;

    @IsString()
    @Length(2,10,{groups: ['create']})
    @Length(1,15,{groups: ['update']}) // note: here 1-15 is the patch change.
    description!: string;

    @IsInt()
    @IsPositive()
    area!: number;

}
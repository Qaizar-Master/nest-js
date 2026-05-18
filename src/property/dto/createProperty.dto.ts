import { IsInt, IsPositive, IsString, Length } from "class-validator";

export class CreatePropertyDto {
    @IsString()
    @Length(2,10, {message : 'error on length'}) // makes sure that the input length is between 2 and 10.
    name!: string;

    @IsString()
    @Length(2,10,{groups: ['create']})
    @Length(1,10,{groups: ['create']}) // note: here 1-10 is the patch change.
    description!: string;

    @IsInt()
    @IsPositive()
    area!: number;

}
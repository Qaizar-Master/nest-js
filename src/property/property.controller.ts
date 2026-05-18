import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {

    @Get()
    findAll(){
        return "all properties";
    }

    @Post()
    // whitelist here, makes it so that other than keywords in CreatePropertyDto if found are ignored.
    // @HttpCode(201) // To give the code u want to 
    create(
        @Body(new ValidationPipe({whitelist : true})) 
        body : CreatePropertyDto)
        {
        return body;
    }

    // to get multiple dynamics
    // @Get(":id/:slug")
    // findOne(@Param("id") id : string, @Param("slug") slug : string){
    //     return `id : ${id} and slug : ${slug}`;
    // }

    @Post(":random")
    useBody(@Body('body') body: string){        
        return body;
        // here @Body('body'), looks for 'body' key inside the json payload, so if that is not existing, it return nothing
        // to return the whole json u write this post request:

        // @Post(":random")
            // useBody(@Body() wholePayload: any) {  // <-- Empty decorator grabs everything
            //     return wholePayload; // This will return your entire JSON object
            // }
    
    }
    
    // we need to make id number so we do : ParseIntPipe
    // we need to make sort boolean so we do : ParseBoolPipe
    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id, @Query("sort", ParseBoolPipe) sort){
        console.log(typeof id)
        console.log(typeof sort)
        return  id;
    }




}
 
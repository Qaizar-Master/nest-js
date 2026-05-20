import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, ParseUUIDPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updatePropertyDto';

@Controller('property')
export class PropertyController {

    constructor(private propertyService : PropertyService) {}

    @Get()
    findAll(){
        return this.propertyService.findAll();
    }

    @Post()
    // whitelist here, makes it so that other than keywords in CreatePropertyDto if found are ignored.
    // @HttpCode(201) // To give the code u want to 
    create(
        @Body()
        dto : CreatePropertyDto)
        {
        return this.propertyService.create(dto);
    }

    // @Patch(":id")
    // update(@Body(new ValidationPipe({
    //     whitelist : true, 
    //     groups : ['update'],
    //     always : true
    // }))
    // body : CreatePropertyDto)
    // {
    //     return body;
    // }

    @Patch(':id')
        update(
            @Param('id', ParseIntPipe) id: number, 
            @Body(new ValidationPipe({ whitelist: true })) body: UpdatePropertyDto 
        ) {
            console.log('Validated Body reaching service:', body);
            return this.propertyService.update(id, body);
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
    // @Get(":id")
    // findOne(@Param("id", ParseIntPipe) id, @Query("sort", ParseBoolPipe) sort){
    //     console.log(typeof id)
    //     console.log(typeof sort)
    //     return  id;
    // }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id){
        return this.propertyService.findOne(id);
    }


    @Delete(':id')
    delete(
        @Param('id', ParseIntPipe) id){
        return this.propertyService.delete(id);
    }

}
import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Property } from "../entities/property.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePropertyDto } from "./dto/createProperty.dto";
import { UpdatePropertyDto } from "./dto/updatePropertyDto";
import { dot } from "node:test/reporters";

@Injectable()
export class PropertyService{

    constructor(
        @InjectRepository(Property)private propertyRepo: Repository<Property>
    ){}

    async findOne(id : number){
        const property = await this.propertyRepo.findOne({
            where : {
                id,
            }
        })
        if(!property) throw new NotFoundException();
        return property;
    }

    async findAll(){
        return await this.propertyRepo.find();
    }


    async create(dto : CreatePropertyDto){
        return await this.propertyRepo.save(dto)
            // save is required for creating with propertyRepo
        }


    async update(id:number, dto: UpdatePropertyDto){
        return await this.propertyRepo.update({id}, dto)
    }

    async delete(id : number){
        return await this.propertyRepo.delete({
            id
        }) 
    }
}
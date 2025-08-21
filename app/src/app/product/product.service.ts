import { Injectable } from "@nestjs/common";
import { UpdateProductDto } from "./dto/update-product.dto";
import { CreateProductDto } from "./dto/create-product.dto";


@Injectable()
export class ProductService{
    findOne(id: number){
        return `Você está procurando o produto de id: ${id}`
    }

    create(createProductDto: CreateProductDto){
        return createProductDto;
    }

    update(id: number, updateProductDto: UpdateProductDto){
        return {id, updateProductDto}
    }

    remove(id: number){
        return `Você está removendo o produto de id: ${id}`
    }
}
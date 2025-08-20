import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductService } from "./product.service";
import { UpdateProductDto } from "./dto/update-product.dto";
import { CreateProductDto } from "./dto/create-product.dto";


@Controller('product')
export class ProductController{
    
    constructor(private readonly productService: ProductService){}
    
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.productService.findOne(id);
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto){
        return this.productService.create(createProductDto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto){
        return this.productService.update(id, updateProductDto);
    }

    @Delete(':id/:name')
    remove(@Param('id') id: number){
        return this.productService.remove(id);
    }
}
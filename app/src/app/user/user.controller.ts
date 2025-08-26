import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreateUserDto } from './dto/create-user.dto';
  import { UpdateUserDto } from './dto/update-user.dto';
  import { UserService } from './user.service';
  
  @Controller('users')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @Get()
    findAll() {
      return this.userService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.userService.findOne(id);
    }
  
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateUserDto: UpdateUserDto,
    ) {
      return this.userService.update(id, updateUserDto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.userService.remove(id);
    }
  }
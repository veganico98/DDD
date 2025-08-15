import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from './user.service';

    @Controller('user')
    export class UserController {
        constructor(private readonly userService: UserService) {}
        @Get(':id')
        findOne(@Param('id') id: number){
        return this.userService.findOne(id);
    }
}
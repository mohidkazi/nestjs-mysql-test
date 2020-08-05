import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AddUserDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getUser(): Promise<any> {
    try {
      return this.appService.getUser();
    } catch (error) {
      // throw error
      return error
    }
  }

  @Post()
  async AddUser(
    @Body() payload: AddUserDto
  ): Promise<string> {
    try {
      return this.appService.addUser(payload)
    } catch (error) {
      throw error
    }
  }
}

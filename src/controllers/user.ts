import { JsonController, Get, Post } from 'routing-controllers';

@JsonController('/users')
export class UserController {
  @Get('/')
  getAll() {
    return [];
  }
}

import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';
import { AddUserDto } from './app.dto';
import { v4 as uuidV4 } from 'uuid';
@Injectable()
export class AppService {
  constructor(
    private readonly mysql: DatabaseService
  ) { }

  async getUser(): Promise<any> {
    const getUser = await new Promise((resolve, reject) => {
      this.mysql.connection.query("SELECT * FROM users", (error, data) => {
        console.log('d: ', data)
        resolve(data)
      })
    })
    return getUser
  }

  async addUser(
    payload: AddUserDto
  ): Promise<string> {
    try {
      const addUser = {
        id: uuidV4(),
        ...payload
      }
      this.mysql.connection.query("INSERT INTO users SET ?", addUser, async (error, data) => {
        if (error)
          throw error;
        else
          console.log('d: ', data)
      });
      return 'user saved'
    } catch (error) {
      throw error
    }
  }

}

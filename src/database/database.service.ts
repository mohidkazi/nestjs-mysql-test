import { Injectable } from '@nestjs/common';
import { createConnection } from 'mysql';


@Injectable()
export class DatabaseService {
    connection = createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql123',
        database: 'fakedb'
    });
}

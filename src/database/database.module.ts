import { Module, DynamicModule } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Module({
  
})
export class DatabaseModule {
  static register(): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [DatabaseService],
      exports: [DatabaseService]
    };
  }
}

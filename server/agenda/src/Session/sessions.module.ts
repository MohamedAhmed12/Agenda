import { Module } from '@nestjs/common';
import { SessionController } from './sessions.controller';
import { SessionService } from './sessions.service';
import { Session } from './entities/session.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Session])],
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {}

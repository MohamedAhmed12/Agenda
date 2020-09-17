import { Controller, Get, Param } from '@nestjs/common';
import { Connection } from 'typeorm';
import { SessionService } from './sessions.service';
import { Session } from './entities/session.entity';

@Controller()
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Get('/sessions')
  getSessions(): Promise<Session> {
    return this.sessionService.getSessions();
  }

  @Get('sessions/days')
  getSessionsDays(connection: Connection): Promise<any> {
    return this.sessionService.getSessionsDays(connection);
  }

  @Get('sessions/days/:day')
  getSessionsByDay(@Param() params) {
    return this.sessionService.getSessionsByDay(params.day);
  }

  @Get('sessions/venue')
  getSessionsVenue() {
    return this.sessionService.getSessionsVenue();
  }
}

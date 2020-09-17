import { Controller, Get, Param } from '@nestjs/common';
import { TagService } from './tags.service';
import { Tag } from './entities/tag.entity';

@Controller()
export class TagController {
  constructor(private readonly sessionService: TagService) {}

  @Get('/tags')
  getTag(): Promise<Tag[]> {
    return this.sessionService.getTags();
  }
}

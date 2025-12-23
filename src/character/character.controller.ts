import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PaginationDto } from 'src/utils/pagination.dto';
import { CharacterService } from './character.service';
import { CharacterAllDto } from './dto/character-all.dto';
import { CharacterCreateDto } from './dto/character-create.dto';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {
    // Empty
  }

  @Get()
  public all(@Query() paginationIn: PaginationDto, @Query() params: CharacterAllDto) {
    return this.characterService.all(paginationIn, params);
  }

  @Post()
  public create(@Body() body: CharacterCreateDto) {
    return this.characterService.create(body);
  }
}

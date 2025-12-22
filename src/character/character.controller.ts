import { Body, Controller, Post } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterCreateInDto } from './dto/character-create-in.dto';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {
    // Empty
  }

  @Post()
  public create(@Body() body: CharacterCreateInDto) {
    return this.characterService.create(body);
  }
}

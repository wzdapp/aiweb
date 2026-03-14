import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ExhibitionsService } from './exhibitions.service';

@Controller('exhibitions')
export class ExhibitionsController {
  constructor(private readonly exhibitionsService: ExhibitionsService) {}

  @Post()
  create(@Body() createExhibitionDto: any) {
    return this.exhibitionsService.create(createExhibitionDto);
  }

  @Get()
  findAll(@Query() query: { status?: string; isActive?: boolean }) {
    return this.exhibitionsService.findAll(query);
  }

  @Get('stats')
  getStats() {
    return this.exhibitionsService.getStats();
  }

  @Get('upcoming')
  findUpcoming() {
    return this.exhibitionsService.findUpcoming();
  }

  @Get('ongoing')
  findOngoing() {
    return this.exhibitionsService.findOngoing();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exhibitionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExhibitionDto: any) {
    return this.exhibitionsService.update(+id, updateExhibitionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exhibitionsService.remove(+id);
  }
}

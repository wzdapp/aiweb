import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { LeadsService } from './leads.service';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  create(@Body() createLeadDto: any) {
    return this.leadsService.create(createLeadDto);
  }

  @Get()
  findAll(@Query() query: { status?: string; isActive?: boolean }) {
    return this.leadsService.findAll(query);
  }

  @Get('stats')
  getStats() {
    return this.leadsService.getStats();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leadsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeadDto: any) {
    return this.leadsService.update(+id, updateLeadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leadsService.remove(+id);
  }
}

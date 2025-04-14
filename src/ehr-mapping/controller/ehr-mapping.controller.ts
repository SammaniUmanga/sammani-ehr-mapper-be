import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateEHRMappingDto } from '../dto/create-ehr-mapping.dto';
import { EHRMappingService } from '../services/ehr.service';
import { CreateEHRDto } from '../dto/create-ehr.dto';

@Controller('ehr-systems')
export class EHRController {
  constructor(private readonly ehrMappingService: EHRMappingService) {}

  // Create a new EHR system
  @Post('')
  async createEHR(@Body() createEHRDto: CreateEHRDto) {
    return this.ehrMappingService.createEHR(createEHRDto);
  }

  @Get(':id/mappings')
  async findMappings(@Param('id') id: string) {
    return this.ehrMappingService.findByEHRId(id);
  }

  // Create a new mapping for a specific EHR system
  @Post(':id/mappings')
  async createMapping(
    @Param('id') id: string,
    @Body() createEHRMappingDto: CreateEHRMappingDto,
  ) {
    return this.ehrMappingService.createMapping(id, createEHRMappingDto);
  }
}

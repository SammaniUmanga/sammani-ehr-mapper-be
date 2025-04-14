import { EntityRepository, Repository } from 'typeorm';
import { EHRMapping } from '../../common/entity/ehrMapping.entity';

@EntityRepository(EHRMapping)
export class EhrMappingRepository extends Repository<EHRMapping> {
  async createEHRMapping(data: Partial<EHRMapping>) {
    return this.save(data);
  }

  async findAllEHRMappings() {
    return this.find();
  }

  async findEHRMappingById(id: number) {
    return this.findOneBy({ mapping_id: id });
  }
  
}

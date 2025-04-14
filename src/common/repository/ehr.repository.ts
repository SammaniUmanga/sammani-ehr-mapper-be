import { EntityRepository, Repository } from 'typeorm';
import { EHR } from '../../common/entity/ehr.entity';

@EntityRepository(EHR)
export class EhrRepository extends Repository<EHR> {
  async findByEhrId(ehr_id: string){
    return this.findOne({ where: { ehr_id } });
  }
}

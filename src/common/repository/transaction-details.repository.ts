import { EntityRepository, Repository } from 'typeorm';
import { TransactionDetails } from '../../common/entity/transactionDetails.entity';

@EntityRepository(TransactionDetails)
export class TransactionDetailsRepository extends Repository<TransactionDetails> {
  async createTransactionDetail(data: Partial<TransactionDetails>) {
    return this.save(data);
  }

  async findAllTransactionDetails() {
    return this.find();
  }

  async findTransactionDetailByTxnId(txn_id: number) {
    return this.findBy({ id: txn_id.toString() });
  }
}

import { EntityRepository, Repository } from 'typeorm';
import { Transaction } from '../../common/entity/transaction.entity';

@EntityRepository(Transaction)
export class TransactionRepository extends Repository<Transaction> {
  async createTransaction(data: Partial<Transaction>) {
    return this.save(data);
  }

  async findAllTransactions() {
    return this.find();
  }

  async findTransactionById(id: number) {
    return this.findOneBy({ txn_id: id.toString() });
  }

  async findWithDetails(id: string) {
    return this.findOne({
      where: { txn_id: id },
      relations: ['patient', 'ehr', 'details', 'details.answer'],
    });
  }
}

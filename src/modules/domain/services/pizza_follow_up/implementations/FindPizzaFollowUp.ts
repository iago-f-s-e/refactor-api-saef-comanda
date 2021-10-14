import { PizzaFollowUpHandlers } from '@domain/infra'
import { PizzaFollowUp } from '@domain/entities'
import { FindPizzaFollowUpProtocols, FindPizzaFollowUpProps } from '../contracts'

export class FindPizzaFollowUp implements FindPizzaFollowUpProtocols {
  constructor (private readonly pizzaFollowUpHandlers: PizzaFollowUpHandlers) {}

  public async byBudgetAndProductIndex ({ budgetCode, productIndex }: FindPizzaFollowUpProps): Promise<PizzaFollowUp[]> {
    const pizzaFollowUp = await this.pizzaFollowUpHandlers.repository.find({
      where: { budgetCode, productIndex },
      relations: ['product']
    })
    // .innerJoinAndSelect('PizzaFollowUp.product', 'product')
    // .where('PizzaFollowUp.productIndex = :productIndex', { productIndex })
    // .andWhere('PizzaFollowUp.budgetCode = :budgetCode', { budgetCode })
    // .getMany()

    return pizzaFollowUp
  }
}

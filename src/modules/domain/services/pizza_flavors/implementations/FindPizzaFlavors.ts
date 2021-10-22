import { PizzaFlavorsHandlers } from '@domain/infra'
import { FindPizzaFlavorsProtocols, PizzaFlavorProps } from '../contracts'

export class FindPizzaFlavors implements FindPizzaFlavorsProtocols {
  constructor (private readonly pizzaFlavorsHandles: PizzaFlavorsHandlers) {}

  public async byPizzaCode (pizzaCode: number): Promise<PizzaFlavorProps[]> {
    return this.pizzaFlavorsHandles.repository.query(`
    SELECT 
    product.cdProduto as productCode,
    product.nmproduto as productName,
    product.dsCaminho as image,
    flavor.vlTamanhoPreco as value,
    pizza.nrFatiaMaxQtd as slices
    FROM dbo.IteTamanhoPizza flavor
    INNER JOIN dbo.TamanhoPizza pizza
    ON pizza.cdTamanhoPizza = flavor.cdTamanhoPizza
    INNER JOIN dbo.Produto product
    ON product.cdProduto = flavor.cdProduto
    WHERE flavor.cdTamanhoPizza = ${pizzaCode};
    `)
  }
}

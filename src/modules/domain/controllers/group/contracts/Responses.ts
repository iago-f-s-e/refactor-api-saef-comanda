import { MappedProduct } from '@domain/controllers'

export interface MappedGroup {
  id: number;
  nome: string;
  imagem: string;
  produtos: MappedProduct[];
}

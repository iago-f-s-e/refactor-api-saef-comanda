export interface MappedEmployee {
  codigo: number
  nome: string
  cargo: string
}

export interface MappedEmployeeWithToken {
  funcionario: MappedEmployee
  token: string
}

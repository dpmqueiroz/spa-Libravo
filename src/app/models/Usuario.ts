import { Permissao } from './Permissao';
export interface Usuario {
  id: number,
  email: string,
  firstName: string,
  lastName: string,
  permissao: Permissao,
  imageUrl: string
}

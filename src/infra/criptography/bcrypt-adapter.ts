import { Encrypter } from "../../data/protocols/encrypter";
import bcrypt from 'bcrypt'

export class BcryptAdapter implements Encrypter {
  private readonly salt: number

  constructor(salt: number) {
    this.salt
  }
  async encrypt(value: string): Promise<string> {
    await bcrypt.hash(value, 12) // esse 12 é o salt que é um parâmetro obrigatório do método
    return null
  }
}
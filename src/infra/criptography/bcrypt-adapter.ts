import { Encrypter } from "../../data/protocols/encrypter";
import bcrypt, { hash } from 'bcrypt'

export class BcryptAdapter implements Encrypter {
  private readonly salt: number

  constructor(salt: number) {
    this.salt = salt
  }
  async encrypt(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt) // o salt que é um parâmetro obrigatório do método
    return hash
  }
}
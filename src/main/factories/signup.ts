import { SignUpController } from "../../presentation/controllers/signup/signup"
import { EmailValidatorAdapter } from "../../utils/email-validator-adapter"
import { DbAddAccount } from "../../data/usecases/add-account/db-add-account"
import { BcryptAdapter } from "../../infra/criptography/bcrypt-adapter"
import { AccountMongoRepo } from "../../infra/db/mongodb/account-repo/account"

export const makeSignUpController = (): SignUpController => {
  const salt = 12
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepo = new AccountMongoRepo()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepo)
  return new SignUpController(emailValidatorAdapter, dbAddAccount)
}
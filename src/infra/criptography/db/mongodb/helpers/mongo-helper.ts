import { Collection, MongoClient } from "mongodb"
import { AccountModel } from "../../../../../domain/models/account"

export const MongoHelper = {
  client: null as MongoClient,
  async connect(url: string): Promise<void> {
    this.client = await MongoClient.connect(url)
  },

  async disconnect(): Promise<void> {
    this.client.close()
  },

  getCollection(name: string): Collection {
    return this.client.db().collection(name)
  },

  map (accountData: any, accountId: string): AccountModel {
    return {
      email: accountData.email,
      id: accountId,
      name: accountData.name,
      password: accountData.password
    }
  }
}
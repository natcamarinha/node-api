import { Collection, MongoClient } from "mongodb"
import { AccountModel } from "../../../../domain/models/account"

export const MongoHelper = {
  client: null as MongoClient,
  uri: null as unknown as string,
  async connect(uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconnect(): Promise<void> {
    await this.client.close()
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
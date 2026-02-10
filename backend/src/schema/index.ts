import { PCardResolvers } from './pCard/resolvers'
import { PCardSchema } from './pCard/typeDefs'

export const Schema = `${PCardSchema}`
export const Resolvers = {
  Query: {
    ...PCardResolvers.Query,
  },

  Type: PCardResolvers.Type,
  Plan: PCardResolvers.Plan,
  Rarity: PCardResolvers.Rarity,
  Cost: PCardResolvers.Cost,
}

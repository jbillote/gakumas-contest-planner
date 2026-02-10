import { PCardService } from '../../services/pCardService'

export const PCardResolvers = {
  Query: {
    pCards: async (_: unknown, { plan }: { plan: string }) => {
      return await PCardService.getPCards(plan)
    },
  },
  Type: {
    TROUBLE: 'trouble',
    ACTIVE: 'active',
    MENTAL: 'mental',
  },
  Plan: {
    FREE: 'free',
    SENSE: 'sense',
    LOGIC: 'logic',
    ANOMALY: 'anomaly',
  },
  Rarity: {
    T: 't',
    R: 'r',
    SR: 'sr',
    SSR: 'ssr',
  },
  Cost: {
    LOW: 'low',
    HIGH: 'high',
  },
}

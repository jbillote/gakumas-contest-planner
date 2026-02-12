import { pCardService } from '../../services/pCardService'

export const PCardResolvers = {
  Query: {
    pCards: async (_: unknown, { plan, includeFree }: { plan: string; includeFree: boolean }) => {
      return await pCardService.getPCards(plan, includeFree)
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

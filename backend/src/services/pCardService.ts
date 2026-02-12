import { PCard } from '../models/PCard'

const createPCardService = () => {
  return {
    async getPCards(plan: string, includeFree: boolean) {
      return await PCard.find({ plan: { $in: [plan, includeFree ? 'free' : ''] } })
        .sort({ id: 1 })
        .exec()
    },
  }
}

export { createPCardService }
export const pCardService = createPCardService()

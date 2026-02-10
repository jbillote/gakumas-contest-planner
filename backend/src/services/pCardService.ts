import { PCard } from '../models/PCard'

const createPCardService = () => {
  return {
    async getPCards(plan: string) {
      return await PCard.find({ plan: plan }).exec()
    },
  }
}

export { createPCardService }
export const pCardService = createPCardService()

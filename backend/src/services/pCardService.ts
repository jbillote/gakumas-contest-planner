import { PCard } from '../models/PCard'

class PCardService {
  static async getPCards(plan: string) {
    return await PCard.find({ plan: plan })
  }
}

export { PCardService }

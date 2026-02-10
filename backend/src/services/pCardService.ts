import { connectToDB } from '../db/connection'
import { PCard } from '../models/PCard'

class PCardService {
  static async getPCards(plan: string) {
    await connectToDB()
    return await PCard.find({ plan: plan })
  }
}

export { PCardService }

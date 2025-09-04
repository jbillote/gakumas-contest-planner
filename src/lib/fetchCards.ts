'use server'

import { PCard } from "@/generated/prisma"
import { Plan } from "@/generated/prisma"
import { PrismaClient } from "@prisma/client"

async function loadCardsFromDB(plan: Plan): Promise<PCard[]> {
  const prisma = new PrismaClient()
  const cards = await prisma.pCard.findMany({
    select: {
      id: true,
      filename: true,
      name: true,
      type: true,
      plan: true,
      rarity: true,
      customCharacter: true,
      cost: true,
      support: true
    },
    where: {
      OR: [
        {
          plan: plan
        },
        {
          plan: Plan.FREE
        }
      ]
    }
  })
  return cards
}

export { loadCardsFromDB }

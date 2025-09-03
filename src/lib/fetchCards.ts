'use server'

import { PCard } from "@/generated/prisma"
import { Plan } from "@/generated/prisma"
import { PrismaClient } from "@prisma/client"

import { typeFromDBString } from "@/lib/cardTypes"
import { rarityFromString } from "@/lib/rarity"

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
      plan: plan
    }
  })
  return cards
}

export { loadCardsFromDB }

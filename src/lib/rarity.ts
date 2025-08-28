import { Rarity } from "@/generated/prisma"

const CardRarities = {
  R: 'r',
  SR: 'sr',
  SSR: 'ssr',
  T: 't'
} as const

type CardRarity = typeof CardRarities[keyof typeof CardRarities]

function rarityFromString(rarity: Rarity): CardRarity {
  switch (rarity) {
    case 'R':
      return CardRarities.R
    case 'SR':
      return CardRarities.SR
    case 'SSR':
      return CardRarities.SSR
    case 'T':
      return CardRarities.T
    default:
      return CardRarities.SSR
  }
}

export { CardRarities, rarityFromString }
export type { CardRarity }

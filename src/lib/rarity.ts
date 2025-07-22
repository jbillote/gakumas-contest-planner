const Rarities = {
  R: 'r',
  SR: 'sr',
  SSR: 'ssr'
} as const

type Rarity = typeof Rarities[keyof typeof Rarities]

export { Rarities }
export type { Rarity }

const CardTypes = {
  Trouble: 't',
  Active: 'a',
  Mental: 'm'
} as const

type CardType = typeof CardTypes[keyof typeof CardTypes]

export { CardTypes }
export type { CardType }

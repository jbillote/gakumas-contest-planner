import { Type } from '@/generated/prisma'

const CardTypes = {
  Trouble: 't',
  Active: 'a',
  Mental: 'm',
} as const

type CardType = (typeof CardTypes)[keyof typeof CardTypes]

function typeFromDBString(dbType: Type): CardType {
  switch (dbType) {
    case 'ACTIVE':
      return CardTypes.Active
    case 'MENTAL':
      return CardTypes.Mental
    case 'TROUBLE':
      return CardTypes.Trouble
  }
}

export { CardTypes, typeFromDBString }
export type { CardType }

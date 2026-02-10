const PCardSchema = `
  type PCard {
    id: Int!
    filename: String!
    name: String!
    type: Type!
    plan: Plan!
    rarity: Rarity!
    support: Boolean!
    cost: Cost!
    customCharacter: Boolean!
  }

  enum Type {
    TROUBLE
    ACTIVE
    MENTAL
  }

  enum Plan {
    FREE
    SENSE
    LOGIC
    ANOMALY
  }

  enum Rarity {
    T
    R
    SR
    SSR
  }

  enum Cost {
    LOW
    HIGH
  }

  type Query {
    pCards(plan: Plan): [PCard!]!
  }
`

export { PCardSchema }

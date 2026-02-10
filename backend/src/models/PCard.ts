import { Schema, model } from 'mongoose'

const Types = {
    TROUBLE: 'trouble',
    ACTIVE: 'active',
    MENTAL: 'mental'
} as const
type Type = typeof Types[keyof typeof Types]

const Plans = {
    FREE: 'free',
    SENSE: 'sense',
    LOGIC: 'logic',
    ANOMALY: 'anomaly'
} as const
type Plan = typeof Plans[keyof typeof Plans]

const Rarities = {
    T: 't',
    R: 'r',
    SR: 'sr',
    SSR: 'ssr'
} as const
type Rarity = typeof Rarities[keyof typeof Rarities]

const Costs = {
    LOW: 'low',
    HIGH: 'high'
} as const
type Cost = typeof Costs[keyof typeof Costs]

const pcardSchema = new Schema({
    id: { type: Number, required: true },
    filename: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, enum: Object.values(Types), required: true },
    plan: { type: String, enum: Object.values(Plans), required: true },
    rarity: { type: String, enum: Object.values(Rarities), required: true },
    support: { type: Boolean, default: false, required: true },
    cost: { type: String, enum: Object.values(Costs), required: true },
    customCharacter: { type: Boolean, default: false, required: true }
})

export const PCard = model('PCard', pcardSchema)
export type { Type, Plan, Rarity, Cost }

import { PCardIcon } from "./pCardIcon"
import { PrismaClient } from "@/generated/prisma"

import { typeFromDBString } from "@/lib/cardTypes"
import { rarityFromString } from "@/lib/rarity"

async function loadCards() {
    const prisma = new PrismaClient()
    const cards = await prisma.pCard.findMany({
        select: {
            id: true,
            filename: true,
            name: true,
            type: true,
            plan: true,
            rarity: true,
            customCharacter: true
        }
    })
    return cards
}

export async function PCardSelector() {
    const cards = await loadCards()
    return (
        <div className="flex max-w-xl flex-wrap gap-1 justify-center align-center overflow-y-scroll max-h-fit box-border py-2">
            {cards.map((card) => (
                <PCardIcon
                    pCard={{
                        id: `${card.filename}${card.customCharacter ? '-jsna' : ''}`,
                        enhanced: false,
                        type: typeFromDBString(card.type),
                        rarity: rarityFromString(card.rarity)
                    }}
                    key={card.id}
                />
            ))}
        </div>
    )
}

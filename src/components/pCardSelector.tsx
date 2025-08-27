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
        <>
            <div className="justify-center align-center overflow-auto flex-1">
                <div className="gap-1 justify-center align-center box-border py-2 flex flex-wrap">
                    {
                        cards.map((card) => (
                            <PCardIcon
                                pCard={{
                                    id: `${card.filename}${card.customCharacter ? '-jsna' : ''}`,
                                    enhanced: false,
                                    type: typeFromDBString(card.type),
                                    rarity: rarityFromString(card.rarity)
                                }}
                                key={card.id}
                            />
                        ))
                    }
                </div >
            </div>
            <div className="h-[5%]">
                Filters
                <div>
                    Free Sense Logic Anomaly
                </div>
                <div>
                    Characters
                </div>
            </div>
        </>
    )
}

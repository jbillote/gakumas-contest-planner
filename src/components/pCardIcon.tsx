import { CardType, CardTypes } from "@/lib/cardTypes"
import { CardRarity } from "@/lib/rarity"

type pCardIconProps = {
    id: string,
    enhanced: boolean,
    type: CardType,
    rarity: CardRarity
}

export function PCardIcon({ pCard }: { pCard: pCardIconProps }) {
    let frame = 'card_frame_'
    if (pCard.type == CardTypes.Trouble) {
        frame += pCard.type
    } else {
        frame += `${pCard.type}_${pCard.rarity}`
    }

    return (
        <div className="rounded-lg size-16 bg-cover overflow-hidden" style={{
            backgroundImage: `url(/pcards/${pCard.id}.webp)`
        }}>
            <img
                src={`/${frame}.webp`}
                alt={pCard.id}
                className="size-16"
                draggable={false}
            />
        </div>
    )
}

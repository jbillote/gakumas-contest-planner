import Image from "next/image"

import activeN from "../../public/card_frame_a_n.webp"
import activeR from "../../public/card_frame_a_r.webp"
import activeSR from "../../public/card_frame_a_sr.webp"
import activeSSR from "../../public/card_frame_a_ssr.webp"

import mentalN from "../../public/card_frame_m_n.webp"
import mentalR from "../../public/card_frame_m_r.webp"
import mentalSR from "../../public/card_frame_m_sr.webp"
import mentalSSR from "../../public/card_frame_m_ssr.webp"

import toughness from "../../public/pcards/img_general_skillcard_men-2_074-jsna.webp"

type pCardIconProps = {
    id: number,
    enhanced: boolean,
}

export function PCardIcon({ pCard }: { pCard: pCardIconProps }) {
    const id = (pCard.id + (pCard.enhanced ? 1 : 0)).toString()

    return (
        <div className="rounded-lg w-24 h-24 bg-cover overflow-hidden" style={{
            backgroundImage: `url(${toughness.src})`
        }}>
            <Image
                src={mentalSR}
                alt={id}
                width="96"
                height="96"
            />
        </div>
    )
}

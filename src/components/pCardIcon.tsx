import Image from "next/image"

type pCardIconProps = {
    id: number,
    enhanced: boolean,
}

export function PCardIcon({ pCard }: { pCard: pCardIconProps }) {
    const id = (pCard.id + (pCard.enhanced ? 1 : 0)).toString()

    return (
        <>
            <Image
                src={`/pcards/${id}.webp`}
                alt={id}
                width="96"
                height="96"
            />
        </>
    )
}

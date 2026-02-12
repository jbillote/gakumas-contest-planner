type pCardIconProps = {
  id: string
  enhanced: boolean
  type: string
  rarity: string
}

function convertType(type: string): string {
  switch (type) {
    case 'ACTIVE':
      return 'a'
    case 'MENTAL':
      return 'm'
    case 'TROUBLE':
      return 't'
    default:
      return 'a'
  }
}

export function PCardIcon({ pCard }: { pCard: pCardIconProps }) {
  let frame = 'card_frame_'
  if (pCard.type === 'TROUBLE') {
    frame += convertType(pCard.type)
  } else {
    frame += `${convertType(pCard.type)}_${pCard.rarity.toLowerCase()}`
  }

  return (
    <div
      className="size-16 cursor-pointer overflow-hidden rounded-lg bg-cover hover:outline-solid"
      style={{
        backgroundImage: `url(/pcards/${pCard.id}.webp)`,
      }}
    >
      <img src={`/${frame}.webp`} alt={pCard.id} className="size-16" draggable={false} />
    </div>
  )
}

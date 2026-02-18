import { type PCard } from '@/lib/models/pCard'

type pCardIconProps = {
  pCard: PCard
  index: number
  selectPCard?: (index: number, pCard: PCard) => void
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

function PCardIcon({ index, pCard, selectPCard }: pCardIconProps) {
  let frame = 'card_frame_'
  if (pCard.type === 'TROUBLE') {
    frame += convertType(pCard.type)
  } else {
    frame += `${convertType(pCard.type)}_${pCard.rarity.toLowerCase()}`
  }

  return (
    <div
      className="relative cursor-pointer overflow-hidden rounded-lg bg-cover hover:outline-solid"
      style={{
        backgroundImage: `url(/pcards/${pCard.id}.webp)`,
      }}
      onClick={() => selectPCard(index, pCard)}
    >
      <img src={`/${frame}.webp`} alt={pCard.id} className="size-16" draggable={false} />
      {pCard.enhanced && (
        <div className="absolute right-0 bottom-0 h-1/3 w-1/3 font-extrabold">
          <img src="/icon_enhanced.webp" alt="+" width="19px" height="19px" />
        </div>
      )}
    </div>
  )
}
export { PCardIcon }

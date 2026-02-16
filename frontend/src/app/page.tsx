'use client'

import { PCardIcon } from '@/components/pCardIcon'
import { PCardSelector } from '@/components/pCardSelector'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { PCard } from '@/lib/models/pCard'
import { useState } from 'react'

export default function Home() {
  const [selectedCards, setSelectedCards] = useState<PCard[]>(Array(5).fill(null))

  const selectPCard = (pCard: PCard) => {
    setSelectedCards(oldValue => {
      const updatedValue = [...oldValue]
      updatedValue[0] = pCard
      return updatedValue
    })
  }

  return (
    <div className="p-4 text-center">
      <h1 className="text-lg font-bold">Target Cards</h1>
      <div>
        <div className="size-16 inline-block">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="size-16 bg-cover" variant="secondary">
                {selectedCards[0] === null ? (<div></div>) :
                  (<PCardIcon pCard={selectedCards[0]} />)}
              </Button>
            </DialogTrigger>
            <DialogContent className="flex h-5/6 flex-col">
              <DialogTitle className="sr-only">Target 1</DialogTitle>
              <PCardSelector selectPCard={selectPCard} />
            </DialogContent>
          </Dialog>
        </div>
        <div className="inline-block p-2">
          <Button className="size-16" variant="secondary" />
        </div>
        <div className="inline-block p-2">
          <Button className="size-16" variant="secondary" />
        </div>
        <div className="inline-block p-2">
          <Button className="size-16" variant="secondary" />
        </div>
        <div className="inline-block p-2">
          <Button className="size-16" variant="secondary" />
        </div>
      </div>

      <h1 className="text-lg font-bold">Valid Cards</h1>
    </div >
  )
}

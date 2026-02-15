'use client'

import { PCardSelector } from '@/components/pCardSelector'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { PCard } from '@/lib/pCard'
import { useState } from 'react'

export default function Home() {
  const [selectedCards, setSelectedCards] = useState<PCard[]>(Array(5).fill(null))

  const selectPCard = (pCard: PCard) => {
    console.log('updating')
    setSelectedCards(oldValue => {
      const updatedValue = [...oldValue]
      updatedValue[0] = pCard
      console.log(updatedValue[0])
      return updatedValue
    })
  }

  return (
    <div className="p-4 text-center">
      <h1 className="text-lg font-bold">Target Cards</h1>
      <div>
        <div className="inline-block p-2" style={{ backgroundImage: selectedCards[0] ? `url(/pcards/${selectedCards[0].filename}.webp` : '' }}>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" />
            </DialogTrigger>
            <DialogContent className="flex h-5/6 flex-col">
              <DialogTitle className="sr-only">Target 1</DialogTitle>
              <PCardSelector selectPCard={selectPCard} />
            </DialogContent>
          </Dialog>
        </div>
        <div className="inline-block p-2">
          <Button variant="secondary" />
        </div>
        <div className="inline-block p-2">
          <Button variant="secondary" />
        </div>
        <div className="inline-block p-2">
          <Button variant="secondary" />
        </div>
        <div className="inline-block p-2">
          <Button variant="secondary" />
        </div>
      </div>

      <h1 className="text-lg font-bold">Valid Cards</h1>
    </div >
  )
}

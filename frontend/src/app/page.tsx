'use client'

import { PCardIcon } from '@/components/pCardIcon'
import { PCardSelector } from '@/components/pCardSelector'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { PCard } from '@/lib/models/pCard'
import { useState } from 'react'

export default function Home() {
  const [selectedCards, setSelectedCards] = useState<PCard[]>(Array(5).fill(null))

  const selectPCard = (index: number, pCard: PCard) => {
    setSelectedCards((oldValue) => {
      const updatedValue = [...oldValue]
      updatedValue[index] = pCard
      return updatedValue
    })
  }

  return (
    <div className="p-4 text-center">
      <h1 className="text-lg font-bold">Target Cards</h1>
      <div>
        <div className="m-2 inline-block size-16 items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="m-0 size-full p-0">
                {selectedCards[0] !== null && <PCardIcon index={0} pCard={selectedCards[0]} />}
              </Button>
            </DialogTrigger>
            <DialogContent className="flex h-5/6 flex-col">
              <DialogTitle className="sr-only">Target 1</DialogTitle>
              <PCardSelector index={0} selectPCard={selectPCard} />
            </DialogContent>
          </Dialog>
        </div>
        <div className="m-2 inline-block size-16 items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="m-0 size-full p-0">
                {selectedCards[1] !== null && <PCardIcon index={1} pCard={selectedCards[1]} />}
              </Button>
            </DialogTrigger>
            <DialogContent className="flex h-5/6 flex-col">
              <DialogTitle className="sr-only">Target 2</DialogTitle>
              <PCardSelector index={1} selectPCard={selectPCard} />
            </DialogContent>
          </Dialog>
        </div>
        <div className="m-2 inline-block size-16 items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="m-0 size-full p-0">
                {selectedCards[2] !== null && <PCardIcon index={2} pCard={selectedCards[2]} />}
              </Button>
            </DialogTrigger>
            <DialogContent className="flex h-5/6 flex-col">
              <DialogTitle className="sr-only">Target 3</DialogTitle>
              <PCardSelector index={2} selectPCard={selectPCard} />
            </DialogContent>
          </Dialog>
        </div>
        <div className="m-2 inline-block size-16 items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="m-0 size-full p-0">
                {selectedCards[3] !== null && <PCardIcon index={3} pCard={selectedCards[3]} />}
              </Button>
            </DialogTrigger>
            <DialogContent className="flex h-5/6 flex-col">
              <DialogTitle className="sr-only">Target 4</DialogTitle>
              <PCardSelector index={3} selectPCard={selectPCard} />
            </DialogContent>
          </Dialog>
        </div>
        <div className="m-2 inline-block size-16 items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="m-0 size-full p-0">
                {selectedCards[4] !== null && <PCardIcon index={4} pCard={selectedCards[4]} />}
              </Button>
            </DialogTrigger>
            <DialogContent className="flex h-5/6 flex-col">
              <DialogTitle className="sr-only">Target 5</DialogTitle>
              <PCardSelector index={4} selectPCard={selectPCard} />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <h1 className="text-lg font-bold">Valid Cards</h1>
    </div>
  )
}

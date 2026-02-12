import { PCardSelector } from '@/components/pCardSelector'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

export default function Home() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-lg font-bold">Target Cards</h1>
      <div>
        <div className="inline-block p-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" />
            </DialogTrigger>
            <DialogContent className="flex h-5/6 flex-col">
              <DialogTitle className="sr-only">Target 1</DialogTitle>
              <PCardSelector />
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
    </div>
  )
}

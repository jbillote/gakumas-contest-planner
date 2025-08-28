import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { PCardSelector } from "@/components/pCardSelector"

export default function Home() {
  return (
    <div className="text-center p-4">
      <h1 className="text-lg font-bold">Target Cards</h1>
      <div>
        <div className="inline-block p-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" />
            </DialogTrigger>
            <DialogContent className="h-5/6 flex flex-col">
              <DialogTitle className="sr-only">
                Target 1
              </DialogTitle>
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
    </div >
  );
}

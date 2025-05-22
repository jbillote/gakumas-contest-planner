import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { PCardSelector } from "@/components/pCardSelector"

export default function Home() {
  return (
    <div className="text-center p-4">
      <h1 className="text-lg font-bold">Target Cards</h1>
      <div>
        <div className="inline-block p-2 w-[96px] h-[96px]">
          <Dialog>
            <DialogTrigger className="w-full h-full">
              <div className="bg-accent hover:bg-slate-200 w-full h-full rounded-md"></div>
            </DialogTrigger>
            <DialogTitle className="sr-only">
              test
            </DialogTitle>
            <DialogContent>
              <PCardSelector />
            </DialogContent>
          </Dialog>
        </div>
        <div className="inline-block p-2 w-[96px] h-[96px]">
          <Dialog>
            <DialogTrigger className="w-full h-full">
              <div className="bg-accent hover:bg-slate-200 w-full h-full rounded-md"></div>
            </DialogTrigger>
            <DialogContent>
              <PCardSelector />
            </DialogContent>
          </Dialog>
        </div>
        <div className="inline-block p-2 w-[96px] h-[96px]">
          <Dialog>
            <DialogTrigger className="w-full h-full">
              <div className="bg-accent hover:bg-slate-200 w-full h-full rounded-md"></div>
            </DialogTrigger>
            <DialogContent>
              <PCardSelector />
            </DialogContent>
          </Dialog>
        </div>
        <div className="inline-block p-2 w-[96px] h-[96px]">
          <Dialog>
            <DialogTrigger className="w-full h-full">
              <div className="bg-accent hover:bg-slate-200 w-full h-full rounded-md"></div>
            </DialogTrigger>
            <DialogContent>
              <PCardSelector />
            </DialogContent>
          </Dialog>
        </div>
        <div className="inline-block p-2 w-[96px] h-[96px]">
          <Dialog>
            <DialogTrigger className="w-full h-full">
              <div className="bg-accent hover:bg-slate-200 w-full h-full rounded-md"></div>
            </DialogTrigger>
            <DialogContent>
              <PCardSelector />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <h1 className="text-lg font-bold">Valid Cards</h1>
    </div>
  );
}

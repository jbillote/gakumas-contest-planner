import { Button } from "@/components/ui/button"
import { PCardSelector } from "@/components/pCardSelector"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function Home() {
  return (
    <div className="text-center p-4">
      <h1 className="text-lg font-bold">Target Cards</h1>
      <div>
        <div className="inline-block p-2 w-[96px] h-[96px]">
          <Popover>
            <PopoverTrigger className="w-full h-full">
              <div className="bg-accent hover:bg-accent-foreground w-full h-full rounded-md"></div>
            </PopoverTrigger>
            <PopoverContent>
              <PCardSelector />
            </PopoverContent>
          </Popover>
        </div>
        <div className="inline-block p-2 w-[96px] h-[96px]">
          <Popover>
            <PopoverTrigger className="w-full h-full">
              <div className="bg-accent hover:bg-accent-foreground w-full h-full rounded-md"></div>
            </PopoverTrigger>
            <PopoverContent>
              <PCardSelector />
            </PopoverContent>
          </Popover>
        </div>
        <div className="inline-block p-2 w-[96px] h-[96px]">
          <Popover>
            <PopoverTrigger className="w-full h-full">
              <div className="bg-accent hover:bg-accent-foreground w-full h-full rounded-md"></div>
            </PopoverTrigger>
            <PopoverContent>
              <PCardSelector />
            </PopoverContent>
          </Popover>
        </div>
        <div className="inline-block p-2 w-[96px] h-[96px]">
          <Popover>
            <PopoverTrigger className="w-full h-full">
              <div className="bg-accent hover:bg-accent-foreground w-full h-full rounded-md"></div>
            </PopoverTrigger>
            <PopoverContent>
              <PCardSelector />
            </PopoverContent>
          </Popover>
        </div>
        <div className="inline-block p-2 w-[96px] h-[96px]">
          <Popover>
            <PopoverTrigger className="w-full h-full">
              <div className="bg-accent hover:bg-accent-foreground w-full h-full rounded-md"></div>
            </PopoverTrigger>
            <PopoverContent>
              <PCardSelector />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <h1 className="text-lg font-bold">Valid Cards</h1>
    </div>
  );
}

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="text-center p-4">
      <h1 className="text-lg font-bold">Target Cards</h1>
      <div>
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
        <div className="inline-block p-2">
          <Button variant="secondary" />
        </div>
      </div>

      <h1 className="text-lg font-bold">Valid Cards</h1>
    </div>
  );
}

import Link from "next/link"
import { SiGithub } from "@icons-pack/react-simple-icons"

export function Header() {
    return (
        <header className="flex top-0 w-full border-b bg-secondary">
            <div className="flex h-(--header-height) w-full items-center gap-2 px-4 py-2">
                <Link href="#" className="flex-auto">
                    学園アイドルマスター
                </Link>
                <Link href="https://github.com/jbillote/gakumas-contest-planner" rel="norefferer" target="_blank">
                    <SiGithub />
                </Link>
            </div>
        </header >
    )
}

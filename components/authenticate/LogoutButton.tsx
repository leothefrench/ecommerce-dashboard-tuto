import Link from "next/link"
import { LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMenuStore } from "@/store/ToggleMenuStore"

export const LogOutButton = () => {
  const {isOpen} = useMenuStore()
  return (
    <div>
      <Button asChild>
        <Link href={'/'} className="flex gap-2">
          <LogOut />
          <span className={`${!isOpen && "max-md:hidden"} ${isOpen && "md:hidden"}`}>
            Log out
          </span>
        </Link>
      </Button>
    </div>

  )
}
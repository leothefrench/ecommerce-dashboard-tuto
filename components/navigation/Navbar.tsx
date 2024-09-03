import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Logo } from "./Logo"
import { MenuToggle } from "./MenuToggle"
import { ModeToggle } from "./ModeToggle"

export const Navbar = () => {
  return (
    <div className="py-4 border-b">
      <div className="md:w-[95%] w-[92%] mx-auto flex  justify-between items-center">
        <div className="flex items-center gap-5">
          <Logo />
          <MenuToggle />
        </div>
        <div className="flex gap-8 items-center">
          <ModeToggle />
          <span className="max-md:hidden">Welcome back Wendido</span>
          <Avatar>
            <AvatarImage src="avatar-image.avif" />
            <AvatarFallback>WE</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
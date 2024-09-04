'use client'

import {motion} from "framer-motion"

import Link from "next/link"
import { House, Users, Package, Shirt, Component, Icon} from "lucide-react"
import { usePathname } from "next/navigation"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

    const menuItems = [
      { href: '/', label: 'Dashboard', icon: House },
      { href: '/customers', label: 'Customers', icon: Users },
      { href: '/orders', label: 'Orders', icon: Package },
      { href: '/products', label: 'Products', icon: Shirt },
      { href: '/team', label: 'Team', icon: Component },
    ];

export const MenuLinks = ({isOpen}:{isOpen: boolean}) => {

  const pathname = usePathname()

  const linkVariants = {
    active: {
      backgroundColor: 'rgba(36, 99, 235, 1)',
      color: '#fff',
      scale: 1.05,
    },
    inactive: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: 'rgb(248, 250, 252)',
      scale: 1,
    },
  };

  return (
    <TooltipProvider>
        <ul className="flex flex-col gap-10">
            {menuItems.map(({href, label, icon: Icon}) => {
                const isActive = (pathname.includes(href) && href.length > 1 || pathname == href)
                return (
                  <li key={href}>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link href={href}>
                          <motion.div
                            className="flex gap-4 items-center py-2 px-4 rounded-md"
                            variants={linkVariants}
                            animate={isActive ? 'active' : 'inactive'}
                            transition={{ duration: 0.3 }}
                          >
                            <Icon size={23} className="mb-1" />
                            <span
                              className={`max-md:hidden ${isOpen && 'hidden'}`}
                            >
                              {label}
                            </span>
                          </motion.div>
                        </Link>
                      </TooltipTrigger>
                      {isOpen && (
                        <TooltipContent>
                          <p>{label}</p>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </li>
                );
            })}
        </ul>
    </TooltipProvider>
  )
}
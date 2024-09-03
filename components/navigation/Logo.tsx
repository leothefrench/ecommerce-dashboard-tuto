'use client'

import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image"
import Link from "next/link"

import { useMenuStore } from '@/store/ToggleMenuStore';

export const Logo = () => {
  const { isOpen } =  useMenuStore()

  return (
    <Link href="/" className="flex items-center gap-5">
      <Image src="logo-icon.svg" width={30} height={30} alt="logo icon" />
      <AnimatePresence initial={false}>
        {!isOpen && (
          <motion.h1
            className="text-xl font-semibold max-md:hidden whitespace-nowrap"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{duration: 0.3}}
          >
            Dashboard
          </motion.h1>
        )}
      </AnimatePresence>
    </Link>
  );
}

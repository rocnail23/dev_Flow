"use client"

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"

import Image from 'next/image'
import Link from 'next/link'
import { SignedOut } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'



export const NavContent = () => {

  const pathName = usePathname()

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((item) => {

        const isActive = (pathName.includes(item.route) && item.route.length > 1 || pathName === item.route)

       return <SheetClose asChild  key={item.route}>
                  <Link href={item.route}
                  className={`${isActive ? 
                    "primary-gradient rounded-lg text-ligth-900":
                     " text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4` }
                         >
                    <Image
                    src={item.imgURL}
                    alt={item.label}
                    width={14}
                    height={14}
                    className={`${isActive ? "" : "invert-colors"}`}>
                    
                    </Image>
                    <p className={`${isActive ? "base-bold":"base-medium"}`}>{item.label}</p>
                  </Link>
             </SheetClose>
      })}
    </section>
  )
}

const MobileNav = () => {
  return (
    <Sheet>
  <SheetTrigger asChild>
    <img src="/assets/icons/hamburger.svg" alt="hamburguer"
    height={36} width={36} className="invert-colors sm:hidden" />
  </SheetTrigger>
  <SheetContent side={"left"} className="background-light900_dark200 border-none">
  <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          alt="DevFlow"
          width={23}
          height={23}
        />
        <p className="h2-bold  text-dark100_ligth900 
         font-spaceGrotesk max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <div>
        <SheetClose asChild>
          <NavContent/>
        </SheetClose>

        <SignedOut>
          <div className="flex flex-col gap">
            <SheetClose asChild>
              <Link href="sign-in">
                  <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg py-3 px-4   shadow-none'>
                      <span className='primary-text-gradient'>Login</span>   
                  </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="sign-up">
                  <Button className='text-dark400_light900 small-medium ligth-border-2 btn-tertiary min-h-[41px] w-full rounded-lg py-3 px-4 shadow-none'>
                   sign-up  
                  </Button>
              </Link>
            </SheetClose> 
          </div>
        </SignedOut>
      </div>
  </SheetContent>
</Sheet>
  )
}

export default MobileNav
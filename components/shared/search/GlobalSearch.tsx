
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'
 
 const GlobalSearch = () => {
   return (
     <div className='relative w-full max-w-[600px] max-lg:hidden'>
        <div className='backgorund-ligth800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4'>
            <Image
            src="/assets/icons/search.svg"
            alt='search'
            width={24}
            height={24}
            className='cursor-pointer z-10'
            />

            <Input 
            type='text'
            placeholder='search global'
            value=""
            className='paragraph-regular no-focus 
            placeholder  border-none
            background-light800_darkgradient shadow-none outline-none ml-[-36px] pl-[38px]'
            />
        </div>
     </div>
   )
 }
 
 export default GlobalSearch
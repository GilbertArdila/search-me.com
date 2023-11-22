import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import SearchBox from './SearchBox';
import {RiSettings3Line} from 'react-icons/ri';
import {TbGridDots} from 'react-icons/tb';
import SearchHeaderOptions from './SearchHeaderOptions';
import SingInButton from './SingInButton';

const SearchHeader = () => {
  return (
    <header className='sticky top-0 bg-white'>
        <div className='flex w-full p-6 items-center justify-between'>
            <Link href={'/'}>
                <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_SViXTETu71dKUgmw5XqWlrZya670KV65Q&usqp=CAU'} width={'120'} height={'40'} alt='go home'/>
            </Link>
            <div className='flex-1'>
                <SearchBox/>
            </div>
            <div className='hidden md:inline-flex space-x-2  '>
             <RiSettings3Line className='header-icon'/>  
             <TbGridDots className='header-icon'/>
            </div>
            <SingInButton onClick={null}/>
        </div>
        <SearchHeaderOptions/>
    </header>
  )
}

export default SearchHeader;
'use client';

import { SlMagnifier } from 'react-icons/sl';
import { CiCamera } from 'react-icons/ci';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';


const SearchHeaderOptions = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get('searchTerm');
  

  return (
    <div className='flex items-center space-x-2 select-none border-b-2 lg:justify-start lg:pl-4 justify-center  w-full   mx-4 md:mx-auto'>

      <div
        onClick={(e) => {
          e.preventDefault();
          if (!searchTerm.trim()) return;
          router.push(`/search/web?searchTerm=${searchTerm}`)
        }}
        className={`flex items-center space-x-1 border-b-4 border-transparent cursor-pointer    active:text-blue-500 pb-3 px-2 ${pathName === "/search/web" && "!text-blue-500 !border-blue-500"}`}>
        <SlMagnifier className='text-md' />
        <span>All</span>
      </div>

      <div
        onClick={(e) => {
          e.preventDefault();
          if (!searchTerm.trim()) return;
          router.push(`/search/image?searchTerm=${searchTerm}`)
        }}
        className={`flex items-center space-x-1 border-b-4 border-transparent cursor-pointer   active:text-blue-500 pb-3 px-2 ${pathName === "/search/image" && "!text-blue-500 !border-blue-500"}`}>
        <CiCamera className='text-md' />
        <span>Images</span>
      </div>

    </div>
  )
}

export default SearchHeaderOptions;
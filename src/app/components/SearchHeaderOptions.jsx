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
        className={`search-header ${pathName === "/search/web" && "search-header-selected"}`}>
        <SlMagnifier className='text-md' />
        <span>All</span>
      </div>

      <div
        onClick={(e) => {
          e.preventDefault();
          if (!searchTerm.trim()) return;
          router.push(`/search/image?searchTerm=${searchTerm}`)
        }}
        className={`search-header ${pathName === "/search/image" && "search-header-selected"}`}>
        <CiCamera className='text-md' />
        <span>Images</span>
      </div>

    </div>
  )
}

export default SearchHeaderOptions;
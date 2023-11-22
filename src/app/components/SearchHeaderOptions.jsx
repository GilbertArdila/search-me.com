'use client';

import { SlMagnifier } from 'react-icons/sl';
import { CiCamera } from 'react-icons/ci';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';



const SearchHeaderOptions = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get('searchTerm');
  

  function selectedTab(tab){
    router.push(`/search/${tab === "Images" ? "image":"web"}?searchTerm=${searchTerm}`)
  }

  return (
    <div className='flex items-center space-x-2 select-none border-b-2 lg:justify-start lg:pl-4 justify-center  w-full   mx-4  sm:w-[90%] sm:mx-auto'>

      <div
        onClick={() => selectedTab('All')}
        className={`search-header ${pathName === "/search/web" && "search-header-selected"}`}>
        <SlMagnifier className='text-md' />
        <span>All</span>
      </div>

      <div
        onClick={() => selectedTab('Images')}
        className={`search-header ${pathName === "/search/image" && "search-header-selected"}`}>
        <CiCamera className='text-md' />
        <span>Images</span>
      </div>

    </div>
  )
}

export default SearchHeaderOptions;
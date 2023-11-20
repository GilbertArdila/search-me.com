'use client';

import {RxCross2} from 'react-icons/rx';
import { FcSearch } from 'react-icons/fc';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const SearchBoxComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const [term, setTerm] = useState(searchTerm || '');
  
  function handleSubmit(e){
    e.preventDefault();
    if(!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`); 
  }
  
  return (
    <form
    onSubmit={handleSubmit}
    className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center'>
      <input 
      type="text" 
      value={term}
      onChange={(e)=>setTerm(e.target.value)}
      className=' w-full focus:outline-none'  />
      <RxCross2 
      onClick={() => setTerm('')}
      className='text-2xl text-gray-500 cursor-pointer sm:mr-2'/>
      <FcSearch 
      onClick={handleSubmit}
      className='sm:inline-block hidden text-3xl text-blue-500 border-l-2 border-gray-300 cursor-pointer pl-1'/>
    </form>
  )
}

export default SearchBoxComponent;
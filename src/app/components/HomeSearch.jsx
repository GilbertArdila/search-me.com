'use client';
import { FcSearch } from 'react-icons/fc';
import { SiIconfinder } from 'react-icons/si'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const HomeSearch = () => {

  const router = useRouter();
  const [term, setTerm] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    if(!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`)
  }

  async function  randomSearch (){
    setLoading(true);
    const response = await fetch(`https://random-word-api.herokuapp.com/word`)
    .then((res)=> res.json())
    .then((data) => data[0]);
    if(!response) return;
    router.push(`/search/web/?searchTerm=${response}`);
    setLoading(false);
  }

  return (
    <>
      <form 
      onSubmit={handleSubmit}
      className='flex w-full mt-5 mx-auto max-w-[90%]  border border-gray-200 px-5 py-3 justify-between rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl'>
        <FcSearch className='text-xl text-gray-500 mr-3' />
        <input
        value={term}
        onChange={(e) => setTerm(e.target.value)} 
        type='text' 
        className='flex-grow focus:outline-none' />
        <SiIconfinder className='text-xl' />
      </form>
      <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-x-4 sm:space-y-0 justify-center mt-8'>
        <button 
        onClick={handleSubmit}
        className='btn'>Search-me</button>
        <button 
        disabled={loading}
        onClick={randomSearch}
        className='btn disabled:opacity-80'>{loading ? (
          <img src={'spinner.svg'}  alt='Loading spinner' className='w-full h-6 text-center'/>
        ):'Search Something To Me'}</button>
      </div>
    </>
  )
}

export default HomeSearch
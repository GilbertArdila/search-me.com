'use client';
import { SlMagnifier } from 'react-icons/sl';
import { BiSolidMicrophone } from 'react-icons/bi'

const HomeSearch = () => {
  return (
    <>
      <form className='flex w-full mt-5 mx-auto max-w-[90%]  border border-gray-200 px-5 py-3 justify-between rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl'>
        <SlMagnifier className='text-xl text-gray-500 mr-3' />
        <input type='text' className='flex-grow focus:outline-none' />
        <BiSolidMicrophone className='text-xl' />
      </form>
      <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-x-4 sm:space-y-0 justify-center mt-8'>
        <button className='btn'>Search-me</button>
        <button className='btn'>Search Something To Me</button>
      </div>
    </>
  )
}

export default HomeSearch
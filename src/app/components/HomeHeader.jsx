import Link from 'next/link';
import {TbGridDots} from 'react-icons/tb';


const HomeHeader = () => {
  return (
    <header className='flex justify-end p-5 text-sm'>
        <div className='flex space-x-4 items-center'>
            <Link href={'https://mail.google.com'} className='hover:underline'>
              Gmail
            </Link>
            <Link href={'https://images.google.com'} className='hover:underline'>Images</Link>
            <Link href={'https://images.google.com'} className='hover:underline'><TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2'/></Link>
            <button className='sign-in-btn'>Sign in</button>
        </div>
    </header>
  )
}

export default HomeHeader
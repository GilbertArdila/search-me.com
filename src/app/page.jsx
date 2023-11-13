import Image from 'next/image';
import HomeHeader from './components/HomeHeader';
import HomeSearch from './components/HomeSearch';


export default function Home() {
  return (
    <>
      <HomeHeader/>
      <div className='flex flex-col items-center mt-24'>
        <Image
        width={'300'}
        height={'100'}
        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_SViXTETu71dKUgmw5XqWlrZya670KV65Q&usqp=CAU'}
        alt='Search image'
        />
        <HomeSearch/>
      </div>
    </>
  )
}

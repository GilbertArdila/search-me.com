import CountryLookup from './CountryLookup';

import { MdOutlineMailOutline } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';

const Footer = () => {
    {/**Because the footer is absolute the layout on root must be relative */}
  return (
    
    <footer className='absolute bottom-0 text-sm text-gray-500 bg-[#f5f5f5] w-full'>
        <div className='border-b px-8 py-3'>
            <CountryLookup/>
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0'>
            <ul  className='flex items-center space-x-6 relative'>
                <li className='link'>
                    <a href='mailto:gilbertferney@gmail.com?subject=Quiero%20contactarte' target='_blank' rel='noopener noreferrer'><MdOutlineMailOutline className='anchor hover:bg-[#e14e41]'/></a>
                </li>
                <li className='link'>
                    <a 
                    className='anchor hover:bg-[#272C30]'
                    href='https://github.com/GilbertArdila' target='_blank' rel='noopener noreferrer'><FaGithub className='text-2xl'/></a>
                </li>
                <li className='link'>
                    <a 
                    className='anchor hover:bg-[#0073B2]'
                    href='https://www.linkedin.com/in/gilbert-ardila-cruz-652577210/' target='_blank' rel='noopener noreferrer'><CiLinkedin className='text-2xl'/></a>
                </li>
                
            </ul>
            <ul className='flex items-center space-x-6'>
                <li className='hover:underline cursor-pointer'>Privacy</li>
                <li className='hover:underline cursor-pointer'>Terms</li>
                <li className='hover:underline cursor-pointer'>Settings</li>
                
            </ul>
        </div>
    </footer>
  )
}

export default Footer
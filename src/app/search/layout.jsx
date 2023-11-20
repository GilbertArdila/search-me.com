import { Inter } from 'next/font/google';
import '../globals.css';
import SearchHeader from '../components/SearchHeader';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Search page',
    description: 'In this page you going to see what you are looking for',
}

export default function SearchLayout({ children }) {
    return (

        <div className={inter.className}>
            <SearchHeader />
            {children}

        </div>


    )
}

import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Search me ',
  description: 'This browser done with Next.js where you can find lots of things',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/**this styles are to let the footer down always */}
      <body className={`${inter.className} relative min-h-screen`}>

        {children}
        <Footer />

      </body>

    </html>
  )
}

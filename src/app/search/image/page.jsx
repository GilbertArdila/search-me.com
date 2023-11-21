import ImageSearchResults from '@/app/components/ImageSearchResults';
import Link from 'next/link';

const SearchImage = async ({searchParams}) => {

  try {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_GOOGLE_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image`);

if(!response.ok){
  throw new Error('Something went wrong')
}

const data = await response.json();

const results = data.items;

if(!results){
  return <div className='flex flex-col justify-center items-center pt-10'>
 <h1 className='text-3xl mb-4'>No results found</h1>
 <p className='text-lg'>Try to search something else or go back to the {' '}
  <Link href={'/'} className='text-blue-500 underline'>
  Homepage
  </Link>
   </p>
 </div>
 
}

  return (
    <div>
      {results && <ImageSearchResults results={data}/>}
    </div>
  )
    
  } catch (error) {
    throw new Error(`Fetching error ${error}`)
  }


}

export default SearchImage;
'use client';

const Error = ({ error, reset }) => {
    return (
        <div className='flex flex-col justify-center items-center pt-10'>
            <h1 className='text-3xl mb-4'>It seems we have a problem here</h1>
            <span className='text-3xl mb-4'>{error}</span>
            <button className='text-blue-500' onClick={() => reset()}>Try again</button>
        </div>
    )
}

export default Error;
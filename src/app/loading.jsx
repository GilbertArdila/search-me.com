import React from 'react'

const Loading = () => {
    return (
        <>
            <div className='animate-pulse self-center'>
                <div className='h-[100px] w-[300px] mb-4 bg-gray-200 rounded-md'> </div>
                <div className='w-full mt-5 mx-auto max-w-[90%]  border border-gray-200 px-5 py-3  bg-gray-200 rounded-md'></div>
                
                <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-x-4 sm:space-y-0 justify-center mt-8'>
                    <div className='w-[144px] h-[40px] bg-gray-200 rounded-md'></div>
                    <div className='w-[144px] h-[40px] bg-gray-200 rounded-md'></div>
                </div>

            </div>

        </>
    )
}

export default Loading;
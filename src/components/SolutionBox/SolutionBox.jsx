import React from 'react'

const SolutionBox = ({title,para}) => {
  return (
    <div className='w-full sm:w-[30%] aspect-square p-5 rounded-lg shadow-lg flex flex-col justify-between gap-y-4 hover:scale-105'>
        <div className='text-start'>
            <h1 className='font-menagrotesk-bold text-customblue-800 text-lg my-5'>{title}</h1>
            <p className=' text-customGrey-200 text-base font-menagrotesk'>{para}</p>
        </div>
        <div className='flex'>
            <h3 className='font-menagrotesk-semi text-customblue-400 text-base'>Learn more</h3>
        </div>
    </div>
  )
}

export default SolutionBox

import React from 'react'
import ShimmerCard from './ShimmerUICard'


function ShimmerUI() {

  return (
    <>
      <div className='flex justify-around flex-wrap '>
        {Array(15).fill("").map((e, index) => (
          <ShimmerCard key={index}/> 
        ))}
      </div>
    </>
  )
}

export default ShimmerUI
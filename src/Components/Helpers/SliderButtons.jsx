import React from 'react'

const SliderButtons = ({FaArrow,btn}) => {
  return (
    <div onClick={btn} className='w-9 h-9 bg-gradient-to-b from-[#303439] to-[#161718] rounded-full flex items-center justify-center text-[#6F787C]'>
    <FaArrow/>

    </div>
  )
}

export default SliderButtons
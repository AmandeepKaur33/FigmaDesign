import React from 'react'
import TabsWidget from './tabsWidget'
import Gallery from './Gallery'

const FigmaDesign = () => {
  return (
    <div className='bg-gradient-to-b from-[#373E44] p-6 to-[#191B1F] w-full lg:h-screen flex flex-col-reverse lg:flex-row gap-6 lg:gap-0  items-center justify-around'>
        <div className='w-full  lg:w-[45%] h-96 lg:h-5/6 bg-[#616161] rounded-3xl border border-[#96BEE7]'></div>
        <div className='w-11/12 lg:w-[45%] h-5/6 flex flex-col gap-10'>
        <TabsWidget/>
        <Gallery/>
        </div>
    </div>
  )
}

export default FigmaDesign
// Frame 1000002194
// width: Hug (597px)px;
// height: Hug (49px)px;background: #363C43;

// top: 119px;
// left: 981px;
// gap: 6px;
// opacity: 0px;

import React, { useContext } from 'react'
import { ImagesContext } from './Context/imagesContext';

import img1 from '../Images/download (34).jpg';
import img2 from '../Images/img2.jpg';

const GalleryImages = () => {
    const {state, containerClass, containerRef} = useContext(ImagesContext)
    const images = [img1,img2,img1,img2];
    
  return (
    <div className={`w-full flex gap-12 lg:gap-5 scroll-smooth  mt-4 overflow-hidden ${containerClass}`} ref={containerRef}>
      {images?.map((item,index)=>(
        <div  key={index} className='rounded-3xl min-w-40 max-w-56 h-32 relative'>
        <img src={item} alt='img' className=' rounded-3xl w-40 h-full '/>
        <div className='absolute w-40 h-full bg-[rgba(0,0,0,0.20)] top-0 left-0 rounded-3xl'></div>
        </div>
      ))}
        {state?.images?.map((item,index)=>(
          <div  key={index} className='rounded-3xl min-w-40 max-w-56 h-32 relative'>
          <img src={item} alt='img' className=' rounded-3xl w-40 h-full '/>
          <div className='absolute w-40 h-full bg-[rgba(0,0,0,0.20)] top-0 left-0 rounded-3xl'></div>
          </div>         
        ))}
    </div>
  )
}

export default GalleryImages
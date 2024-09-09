import React, { useContext } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import SliderButtons from './Helpers/SliderButtons';
import { ImagesContext } from './Context/imagesContext';

const GalleryHeader = () => {
  const {btnPrev, btnNext, inputRef, handleAddImages, handleImgChange} = useContext(ImagesContext)
  return (
    <div className='w-full flex items-center justify-between px-5'>
        <button className='h-10 w-28 bg-[#171717] text-white text-base rounded-[20px]'>Gallery</button>
        <div className='flex items-center gap-6'>
          <button onClick={handleAddImages} className='w-[6.5rem]  h-8 shadow-custom-light backdrop-blur-custom rounded-[104px] text-xs font-extrabold text-white'>+ Add Image</button>
          <input type="file" ref={inputRef} className='hidden' name='imgSrc' onChange={handleImgChange}/>
          <div className='flex items-center gap-3'>
            <SliderButtons FaArrow={FaArrowLeft} btn={btnPrev}/>
            <SliderButtons FaArrow={FaArrowRight} btn={btnNext}/>
          </div>
        </div>
    </div>
  )
}

export default GalleryHeader
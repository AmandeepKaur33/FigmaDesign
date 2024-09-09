import React from 'react'
import SidebarElements from './Helpers/SidebarElements'
import GalleryHeader from './GalleryHeader'
import GalleryImages from './GalleryImages'

const Gallery = () => {
  return (
    <div className="bg-[#363C43] px-3 py-5 w-full h-1/2 flex items-start">
         <SidebarElements/>
         <div className="w-[720px] h-full px-3 flex flex-col gap-5 overflow-hidden">
            <GalleryHeader/>
            <GalleryImages/>
         </div>
    </div>
  )
}

export default Gallery
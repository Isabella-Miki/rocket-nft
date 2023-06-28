import React from 'react'
import galleryPhoto1 from '../assets/galeria-1.png'
import galleryPhoto2 from '../assets/galeria-2.png'
import galleryPhoto3 from '../assets/galeria-3.png'
import galleryPhoto4 from '../assets/galeria-4.png'
import galleryPhoto5 from '../assets/galeria-5.png'
import galleryPhoto6 from '../assets/galeria-6.png'
import galleryPhoto7 from '../assets/galeria-7.png'
import galleryPhoto8 from '../assets/galeria-8.png'


export default function Gallery() {
  return (
    <div className='d-flex flex-wrap align-items-center justify-content-center gap-3 mt-5 row-gap-5'>
        <img className='border border-light'src={galleryPhoto1} alt="" />
        <img className='border border-light'src={galleryPhoto2} alt="" />
        <img className='border border-light'src={galleryPhoto3} alt="" />
        <img className='border border-light'src={galleryPhoto4} alt="" />
        <img className='border border-light'src={galleryPhoto5} alt="" />
        <img className='border border-light'src={galleryPhoto6} alt="" />
        <img className='border border-light'src={galleryPhoto7} alt="" />
        <img className='border border-light'src={galleryPhoto8} alt="" />
    </div>
  )
}

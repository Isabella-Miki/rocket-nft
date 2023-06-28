import React from 'react'
import TextAbout from '../../components/TextAbout'
import bannerAbout from '../../components/assets/banner2.png'
import NumbersAbout from '../../components/NumbersAbout'
import style from'./About.module.scss'
export default function About() {
  return (
    <div className={style.about}>

    <div className='bg-black px-5'>
      <div className='d-flex pt-5'>
        <div className='col-2'>
          <NumbersAbout />
        </div>
        <div>
          <TextAbout />
          <img className='img-fluid' src={bannerAbout} alt="" />

        </div>
      </div>

    </div>
    </div>
  )
}

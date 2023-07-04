import React from 'react'
import instagramLogo from '../assets/instagram.svg'
import twitterLogo from '../assets/twitter.svg'
import youtubeLogo from '../assets/youtube.svg'
import emailLogo from '../assets/email.svg'
import style from './FooterBottom.module.scss'
export default function FooterBottom() {

  return (
    <div className='border-top border-light-subtle p-5 d-flex justify-content-between'>
        <p className='fs-4 text-secondary ms-5 mb-0'>www.rocketseat.com.br</p>
        <div className='d-flex gap-5 me-5'>
            <img className={style.logo} src={instagramLogo} alt="" />
            <img className={style.logo} src={youtubeLogo} alt="" />
            <img className={style.logo} src={twitterLogo} alt="" />
            <img className={style.logo} src={emailLogo} alt="" />
        </div>
    </div>
  )
}

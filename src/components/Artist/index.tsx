import React from 'react'
import artista1 from '../assets/artista-1.png'
import artista2 from '../assets/artista-2.png'
import artista3 from '../assets/artista-3.png'
import artista4 from '../assets/artista-4.png'
import artista5 from '../assets/artista-5.png'
import artista6 from '../assets/artista-6.png'
import style from './Artist.module.scss'

export default function Artist() {
    return (
        <div className='d-flex flex-wrap justify-content-evenly mb-5 gap-5'>

            <div className={`d-flex p-3 align-items-center rounded-1 mt-5 col-3 ${style.cardEffect}`}>
                <img className='px-2' src={artista1} alt="" />
                <div className='ms-3'>
                    <p className='text-white mb-0'>Mayk Brito</p>
                    <p className='mb-0'>80 Fotografias</p>
                </div>
            </div>

            <div className={`d-flex p-3 align-items-center rounded-1 mt-5 col-3 ${style.cardEffect}`}>
                <img src={artista2} alt="" />
                <div className='ms-3'>
                    <p className='text-white mb-0'>Jakeliny G.</p>
                    <p className='mb-0'>99 Fotografias</p>
                </div>
            </div>

            <div className={`d-flex p-3 align-items-center rounded-1 mt-5 col-3 ${style.cardEffect}`}>
                <img src={artista3} alt="" />
                <div className='ms-3'>
                    <p className='text-white mb-0'>João I. (Biro)</p>
                    <p className='mb-0'>50 Fotografias</p>
                </div>
            </div>

            <div className={`d-flex p-3 align-items-center rounded-1 mt-5 col-3 ${style.cardEffect}`}>
                <img src={artista4} alt="" />
                <div className='ms-3'>
                    <p className='text-white mb-0'>Tamires Santos</p>
                    <p className='mb-0'>43 Fotografias</p>
                </div>
            </div>

            <div className={`d-flex p-3 align-items-center rounded-1 mt-5 col-3 ${style.cardEffect}`}>
                <img src={artista5} alt="" />
                <div className='ms-3'>
                    <p className='text-white mb-0'>Ana Silva</p>
                    <p className='mb-0'>28 Fotografias</p>
                </div>
            </div>

            <div className={`d-flex p-3 align-items-center rounded-1 mt-5 col-3 ${style.cardEffect}`}>
                <img src={artista6} alt="" />
                <div className='ms-3'>
                    <p className='text-white mb-0'>Diego F.</p>
                    <p className='mb-0'>20 Fotografias</p>
                </div>
            </div>
        </div>
    )
}

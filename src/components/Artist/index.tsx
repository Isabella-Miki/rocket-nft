import React from 'react'
import artista1 from '../assets/artista-1.png'
import artista2 from '../assets/artista-2.png'
import artista3 from '../assets/artista-3.png'
import artista4 from '../assets/artista-4.png'
import artista5 from '../assets/artista-5.png'
import artista6 from '../assets/artista-6.png'

export default function Artist() {
    return (
        <div className='d-flex flex-wrap'>
            <div className='bg-dark d-flex'>
                <img className='py-5'src={artista1} alt="" />
                <div>
                    <p>Mayk Brito</p>
                    <p className='text-danger'>80 Fotografias</p>
                </div>
            </div>

            <div>

                <img src={artista2} alt="" />
                <div>
                    <p>Jakeliny G.</p>
                    <p className='text-danger'>99 Fotografias</p>
                </div>
            </div>

            <div>

                <img src={artista3} alt="" />
                <div>
                    <p>João I. (Biro)</p>
                    <p className='text-danger'>50 Fotografias</p>
                </div>
            </div>

            <div>

                <img src={artista4} alt="" />
                <div>
                    <p>Tamires Santos</p>
                    <p className='text-danger'>43 Fotografias</p>
                </div>
            </div>

            <div>

                <img src={artista5} alt="" />
                <div>
                    <p>Ana Silva</p>
                    <p className='text-danger'>28 Fotografias</p>
                </div>
            </div>

            <div>

                <img src={artista6} alt="" />
                <div>
                    <p>Diego F.</p>
                    <p className='text-danger'>20 Fotografias</p>
                </div>
            </div>
        </div>

    )
}

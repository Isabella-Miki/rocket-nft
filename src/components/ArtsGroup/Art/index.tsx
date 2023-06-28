import React from 'react'
import arrow from '../../assets/arrow-white.svg'
import astronauta1 from '../../assets/astronauta 1.png'

export default function Art() {
    return (
        <div className='d-flex flex-column mb-5'>
            <h3 className='d-flex justify-content-between mb-4'>
                Astronauta 1
                <img src={arrow} alt="" />
            </h3>

            <div className='d-flex justify-content-between'>
                <p className='text-light-emphasis fw-bold'>Mayk Brito</p>
                <p className='text-danger'>1.50 RKT</p>
            </div>

            <img src={astronauta1} alt="" />
        </div>
    )
}

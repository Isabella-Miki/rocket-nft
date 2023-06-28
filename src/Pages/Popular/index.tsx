import React from 'react'
import ArtsGroup from '../../components/ArtsGroup'
import style from './Popular.module.scss'

export default function Popular() {
    return (
        <div className={style.popular}>

            <div className='bg-black text-white mx-5'>
                <h1 className='fs-1 fw-bold pb-5'><span className='text-danger'>Populares</span> da semana </h1>
                <ArtsGroup />
            </div>
        </div>
    )
}

import React from 'react'
import style from './BestArtists.module.scss'
import Artist from '../../components/Artist'

export default function BestArtists() {
  return (
    <div className={style.bestArtists}>
        <h1 className='fs-1 fw-bold text-white text-center'>Melhores <span className='text-danger'>artistas</span></h1>
        <Artist />
    </div>
  )
}

import Artist from '../../components/Artist'
import arrow from '../../components/assets/arrow-orange.svg'
import style from './BestArtists.module.scss'

export default function BestArtists() {
  return (
    <div className={style.bestArtists}>
      <div className='d-flex flex-column justify-content-center align-items-center '>
        <h2 className='fs-1 fw-bold text-white text-center'>Melhores <span className='text-danger'>artistas</span></h2>
        <Artist />
        <div className={`d-flex justify-content-center text-center py-2 px-4 ${style.btnEffect}`}>
          <p className='m-0 me-4'>Ver todos os artistas</p>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  )
}

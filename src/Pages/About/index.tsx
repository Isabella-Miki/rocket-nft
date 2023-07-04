import TextAbout from '../../components/TextAbout'
import bannerAbout from '../../components/assets/banner2.png'
import NumbersAbout from '../../components/NumbersAbout'
import style from'./About.module.scss'

export default function About() {
  return (
    <div className={style.about}>
      <div className='d-flex'>
        <div className='col-2'>
          <NumbersAbout />
        </div>
        <div className='col-10'>
          <TextAbout />
          <img className='img-fluid' src={bannerAbout} alt="" />
        </div>
      </div>

    </div>
  )
}

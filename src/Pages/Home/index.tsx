import Navbar from '../../components/Navbar'
import style from './Home.module.scss'
import HomeInfo from '../../components/HomeInfo'
import Gallery from '../../components/Gallery'

export default function Home() {
    return (
        <div className={style.home}>
            <Navbar />
            <HomeInfo />
            <Gallery />
        </div>
    )
}

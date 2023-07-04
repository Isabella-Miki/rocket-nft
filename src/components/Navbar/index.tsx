import logo from '../assets/logo.svg'
import { Button } from 'reactstrap'
import metaMask from '../assets/logo_MetaMask.svg'
import style from './Navbar.module.scss'

export default function Navbar() {
    return (
        <nav className='d-flex justify-content-between'>
            <h1>
                <img src={logo} alt="RocketNFT" />
            </h1>

            <ul className='d-flex justify-content-center list-unstyled fs-5'>
                <li className='me-3 mt-2'><a href="#" className={style.link}>Comprar NFT</a></li>
                <li className='me-3 mt-2'><a href="#" className={style.link}>Sobre</a></li>
                <li className='me-3 mt-2'><a href="#" className={style.link}>FAQ</a></li>
            </ul>

            <div>
                <Button className='bg-white text-dark fs-6 fw-bold rounded-0 px-3' variant="outline-primary"><img className='me-2' src={metaMask} alt="logo da meta mask" />Conectar carteira</Button>{' '}
            </div>
        </nav>
    )
}

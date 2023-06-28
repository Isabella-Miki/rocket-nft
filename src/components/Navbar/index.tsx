import logo from '../assets/logo.svg'
import { Button } from 'reactstrap'
import metaMask from '../assets/logo_MetaMask.svg'

export default function Navbar() {
    return (
        <nav className='d-flex align-items=center justify-content-between text-center '>
            <h1>
                <img src={logo} alt="RocketNFT" />
            </h1>

            <ul className='text-white d-flex align-items=center justify-content-center list-unstyled fs-5 mb-0'>
                <li className='me-3 mt-2'>Comprar NFT</li>
                <li className='me-3 mt-2'>Sobre</li>
                <li className='me-3 mt-2'>FAQ</li>
            </ul>


            <div>
            <Button className='bg-white text-dark fs-6 fw-bold rounded-0' variant="outline-primary"><img className='me-2'src={metaMask} alt="logo da meta mask" />Conectar carteira</Button>{' '}

            </div>
        </nav>
    )
}

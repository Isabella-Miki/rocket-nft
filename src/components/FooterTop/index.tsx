import logo from '../../components/assets/logo.svg'
import arrowUp from '../../components/assets/arrow-black.svg'

export default function FooterTop() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
    }

    return (
        <div>
            <div className='d-flex justify-content-between border-bottom border-light-subtle p-5'>
                <img className='ms-5' src={logo} alt="RocketNFTs" />
                <button className='bg-danger border-0 btn rounded-0 p-4 me-5' onClick={() => scrollToTop()}><img src={arrowUp} alt="" /></button>
            </div>
        </div>
    )
}

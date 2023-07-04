import arrow from '../assets/arrow-white.svg'
import astronauta1 from '../assets/astronauta-1.png'
import astronauta2 from '../assets/astronauta-2.png'
import astronauta3 from '../assets/astronauta-3.png'
import astronauta4 from '../assets/astronauta-4.png'

export default function ArtsGroup() {
    return (
        <div className='d-flex justify-content-between my-5'>

            <div>
                <div className='d-flex flex-column mb-5'>
                    <h3 className='d-flex justify-content-between mb-4'>
                        Astronauta 1
                        <img src={arrow} alt="" className='btn'/>
                    </h3>

                    <div className='d-flex justify-content-between'>
                        <p className='text-light-emphasis fw-bold'>Mayk Brito</p>
                        <p className='text-danger'>1.50 RKT</p>
                    </div>

                    <img src={astronauta1} alt="" />
                </div>
                <div className='d-flex flex-column mb-5'>
                    <h3 className='d-flex justify-content-between mb-4'>
                        Astronauta 3
                        <img src={arrow} alt="" className='btn'/>
                    </h3>

                    <div className='d-flex justify-content-between'>
                        <p className='text-light-emphasis fw-bold'>João Inácio (Biro)</p>
                        <p className='text-danger'>3.75 RKT</p>
                    </div>

                    <img src={astronauta3}alt="" />
                </div>
            </div>
            <div className='vr'></div>
            <div>
                <div className='d-flex flex-column mb-5'>
                    <h3 className='d-flex justify-content-between mb-4'>
                        Astronauta 2
                        <img src={arrow} alt="" className='btn'/>
                    </h3>

                    <div className='d-flex justify-content-between'>
                        <p className='text-light-emphasis fw-bold'>Jakeliny Gracielly</p>
                        <p className='text-danger'>2.0 RKT</p>
                    </div>

                    <img src={astronauta2} alt="" />
                </div>
                <div className='d-flex flex-column mb-5'>
                    <h3 className='d-flex justify-content-between mb-4'>
                        Astronauta 4
                        <img src={arrow} alt="" className='btn'/>
                    </h3>

                    <div className='d-flex justify-content-between'>
                        <p className='text-light-emphasis fw-bold'>Tamires Santos</p>
                        <p className='text-danger'>4.30 RKT</p>
                    </div>

                    <img src={astronauta4} alt="" />
                </div>
            </div>


        </div>
    )
}

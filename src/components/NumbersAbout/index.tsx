import React from 'react'

export default function NumbersAbout() {
    return (
        <div className='border border-start-0 border-top-0 ps-5 d-flex flex-column align-items-center justify-content-center pe-5 h-100'>
            <div className='py-3 px-3 text-center'>
                <h2 className='fs-1 fw-semi-bold text-white'>10K+</h2>
                <p className='text-light-emphasis'>Artes</p>
            </div>

            <div className='py-3 px-3 text-center'>
                <h2 className='fs-1 fw-semi-bold text-white'>200+</h2>
                <p className='text-light-emphasis'>Vendas</p>
            </div>

            <div className='py-3 px-3 text-center'>
                <h2 className='fs-1 fw-semi-bold text-white'>20</h2>
                <p className='text-light-emphasis'>Artistas</p>
            </div>
        </div>
    )
}

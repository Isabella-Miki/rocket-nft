import React from 'react'
import artistGroup from '../assets/group-avarts.png'
import badge from '../assets/badge.svg'

export default function HomeInfo() {
    return (
        <div className='pt-5 text-white d-flex justify-content-between align-items-center'>

            <div className='d-flex justify-content-center flex-column w-25'>
                <p className='fs-5 fw-light mb-3'>
                    Mercado digital para colecionáveis em criptos e tokens não fungível (NFT).
                    Compre, venda e descubra ativos digitais exclusivos para você.
                </p>

                <div className='d-flex align-items-center mt-5' >
                    <img src={artistGroup} alt="grupo de artistas" />
                    <div className='d-flex flex-column '>
                        <p className='my-0 fw-bold'>+10</p>
                        <p className='my-0'>Artistas selecionados</p>
                    </div>
                </div>

            </div>

            <h1 className='fs-1 fw-bold w-50'>
                Descubra a verdadeira
                arte digital e colecione diversas <span className='text-danger'> NFTs</span>
            </h1>

            <img src={badge} alt="" />
        </div>
    )
}

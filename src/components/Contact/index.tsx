import React from 'react'
import style from './Contact.module.scss'

export default function Contact() {
  return (
    <div className='row w-100'>

      <div className='col-5 p-0'>
        <div className='p-5 border-end border-light-subtle h-100'>
          <p className='fs-3 text-white lh-1 ms-5 mb-0'>Fique por dentro de <span className='text-danger'>todas as novidades</span></p>
          <div className='mt-5 d-flex ms-5'> 
            <input className='py-3 px-4 fs-5 border-0 bg-black text-white' type="email" name="email" id="email" placeholder='nft@rocketseat.com.br'/>
            <button className='p-3 border-0 fw-bold fs-5' type="submit">Enviar</button>
          </div>
        </div>
      </div>

      <div className='col-7 p-0'>
        <div className='d-flex justify-content-around p-5'>
          <div>
            <p className='fw-bold text-white'>Empresa</p>
            <ul className='list-unstyled lh-lg text-light-emphasis'>
              <li className={style.liHoverEffect}>Sobre</li>
              <li className={style.liHoverEffect}>Serviços</li>
              <li className={style.liHoverEffect}>Time</li>
              <li className={style.liHoverEffect}>Carreira</li>
            </ul>
          </div>

          <div>
            <p className='fw-bold text-white'>Empresa</p>
            <ul className='list-unstyled lh-lg text-light-emphasis'>
              <li className={style.liHoverEffect}>Galeria</li>
              <li className={style.liHoverEffect}>Populares</li>
              <li className={style.liHoverEffect}>Vendas</li>
              <li className={style.liHoverEffect}>Contato</li>
            </ul>
          </div>


          <div>
            <p className='fw-bold text-white'>Links</p>
            <ul className='list-unstyled lh-lg text-light-emphasis'>
              <li className={style.liHoverEffect}>FAQs</li>
              <li className={style.liHoverEffect}>Termos</li>
              <li className={style.liHoverEffect}>Política</li>
              <li className={style.liHoverEffect}>Ajuda</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

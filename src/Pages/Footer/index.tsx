import style from './Footer.module.scss'

import Contact from '../../components/Contact'
import FooterBottom from '../../components/FooterBottom'
import FooterTop from '../../components/FooterTop'

export default function Footer() {

    return (
        <div className={style.footer}>
            <div className='pt-5'>
                <FooterTop />
                <Contact />
                <FooterBottom />
            </div>
        </div>
    )
}

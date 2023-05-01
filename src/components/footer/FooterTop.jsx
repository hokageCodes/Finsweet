import './footer.css'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import FooterLogo from '../../assets/FooterLogo.svg'
import Facebook from '../../assets/facebook.svg'
import Twitter from '../../assets/twitter.svg'
import Instagram from '../../assets/instagram.svg'
import LinkedIn from '../../assets/LinkedIn.svg'

function FooterTop() {
    return (
        <>
            <div className='footer__container'>
                <div className="footer__left">
                    <h2>Let&apos;s make something special</h2>
                    <h4>Let&apos;s talk! 🤙 </h4>
                    <p className='phone'>020 7993 2905</p>
                    <p className='email'>hi@finsweet.com</p>
                </div>
                <div className="footer__right">
                    <div className="first">
                        <ul>
                            <li>Home</li>
                            <li>Service</li>
                            <li>Company</li>
                            <li>Career</li>
                            <li>News</li>
                        </ul>
                    </div>
                    <div className="second">
                        <ul>
                            <li className='service'>Service</li>
                            <li>Technical support</li>
                            <li>Testing</li>
                            <li>Development</li>
                            <li>AWS/Azure</li>
                            <li>Consulting</li>
                            <li>Information Technology</li>
                        </ul>
                    </div>
                    <div className="third">
                        <ul>
                            <li className='service'>Resources</li>
                            <li>About Us</li>
                            <li>Testimonial</li>
                            <li>Privacy Policy</li>
                            <li>Terms of use</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="middleFooter">
                <div className="left">
                    <hr />
                    <p className='address'>DLF Cybercity, Bhubaneswar, India, &52050</p>
                </div>
                <div className="right">
                    <a href="/">Contact Us</a>
                    <HiOutlineArrowNarrowRight />
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__content">

                    <div className="left__bottom">
                        <img src={FooterLogo} alt="" />
                        <p>©2021 Finsweet</p>
                    </div>
                    <div className="social__media">
                        <img src={Facebook} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Instagram} alt="" />
                        <img src={LinkedIn} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterTop
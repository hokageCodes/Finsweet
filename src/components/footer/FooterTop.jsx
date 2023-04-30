import './footer.css'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function FooterTop() {
    return (
        <>
            
            <div>
                <div className="footer__left">
                    <h2>Let&apos;s make something special</h2>
                    <h4>Let&apos;s talk! 🤙 </h4>
                    <p>020 7993 2905</p>
                    <p>hi@finsweet.com</p>
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
                            <li>Service</li>
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
                            <li>Resources</li>
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
                    <p>DLF Cybercity, Bhubaneswar, India, &52050</p>
                </div>
                <div className="right">
                    <a href="/">Contact Us</a>
                    <HiOutlineArrowNarrowRight />
                </div>
            </div>
        </>
    )
}

export default FooterTop
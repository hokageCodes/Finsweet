import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Support from '../../assets/support.svg'
import Settings from '../../assets/settings.svg'
import Code from '../../assets/development.svg'
import './services.css'

function Services() {
    return (
        <section className='services__container'>
            <div className="top">
                <h4>OUR SERVICES</h4>
                <h2>We build software solutions that solve clients business challenges</h2>
                <div className="services__link">
                    <a href="/">Start a Project</a>
                    <HiOutlineArrowNarrowRight />
                </div>
            </div>
            <div className="bottom">
                <div className="card__arrangement">
                    <img src={Support} alt="4" />
                    <h4>Technical support</h4>
                    <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                    <div className="services__bottom__link">
                        <a href="/">Read more</a>
                        <HiOutlineArrowNarrowRight />
                    </div>
                </div>
                <div className="card__arrangement">
                    <img src={Settings} alt="4" />
                    <h4>Testing Management</h4>
                    <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                    <div className="services__bottom__link">
                        <a href="/">Read more</a>
                        <HiOutlineArrowNarrowRight />
                    </div>
                </div>
                <div className="card__arrangement">
                    <img src={Code} alt="4" />
                    <h4>Development</h4>
                    <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                    <div className="services__bottom__link">
                        <a href="/">Read more</a>
                        <HiOutlineArrowNarrowRight />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
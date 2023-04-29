import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Settings from '../../assets/settings.svg'

function Services() {
    return (
        <section>
            <div className="top">
                <h4>OUR SERVICES</h4>
                <h2>We build software solutions that solve clients business challenges</h2>
                <div className="services__link">
                    <a href="/">Start a Project</a>
                    <HiOutlineArrowNarrowRight />
                </div>
            </div>
            <div className="bottom">
                <div className="card_arrangement">
                    <img src={Settings} alt="4" />
                    <h4>Technical support</h4>
                    <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                    <div className="bottom-right">
                        <a href="/">Read about us</a>
                        <HiOutlineArrowNarrowRight />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
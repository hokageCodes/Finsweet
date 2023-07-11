import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import './servicesHero.css'

function ServicesHero() {
    return (
        <section className='servicehero__container'>
            <div className="serviceleft__hero__content">
                <h1>We Build Software Solutionthat Solve Clients Business Challenges.</h1>
                <p>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</p>
                <div className="servicescta__hero__link">
                    <a href="/">Request a Quote</a>
                    <HiOutlineArrowNarrowRight className='arrow' />
                </div>
            </div>
            <div className="right__servicehero__content">
                <ul>
                    <li>Technical Support</li>
                    <div className="with__arrow">
                        <li>Development</li>
                        <HiOutlineArrowNarrowRight />
                    </div>
                    <li>AWS/Azure</li>
                    <li>Consulting</li>
                    <li>Information Technology</li>
                </ul>
            </div>
        </section>
    )
}

export default ServicesHero







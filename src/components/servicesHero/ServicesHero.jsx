import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import './servicesHero.css'
import HeroImage from '../../assets/Header_Image.png'

function ServicesHero() {
    return (
        <section className='hero__container'>
            <div className="left__hero__content">
                <h1>Transform Your Idea Into Reality with Finsweet</h1>
                <p>The entire Finsweet team knows what is good with Webflow and you can too with 1 week and a good attitude.</p>
                <div className="cta__hero__link">
                    <a href="/">Clone project</a>
                    <HiOutlineArrowNarrowRight className='arrow' />
                </div>
            </div>
            <div className="right__hero__content">
                <img src={HeroImage} alt='' />
            </div>
        </section>
    )
}

export default ServicesHero
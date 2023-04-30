import Avatar1 from '../../assets/avatar1.png'
import Avatar2 from '../../assets/avatar2.png'
import Avatar3 from '../../assets/avatar.png'
// import Verical from '../../assets/vertical.png'
// import Logo from '../../assets/Logo.png'
import './testimonial.css'
import CardCarousel from '../carousel/Carousel'
function Testimonial() {
    return (
        <section className="testimonial__section">
            <div className="testimonial__left">
                <div className="blue__box"></div>
                <h2>Our customers love what we do</h2>
                <h4>Transform your idea into reality with finsweet</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                <div className="testimonial__left-avatar">
                    <img src={Avatar1} alt="" />
                    <img src={Avatar2} alt="" />
                    <img src={Avatar3} alt="" />
                </div>
                <p className='review'>30+ Customer Reviews</p>
            </div>
            <div className="testimonial__right">
                <CardCarousel />
            </div>
        </section>
    )
}

export default Testimonial
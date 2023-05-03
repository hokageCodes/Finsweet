import './about.css'
import Middle1 from '../../assets/middle_1.png'
import Middle2 from '../../assets/middle_2.png'
import Middle3 from '../../assets/middle_3.png'
import Vertical from '../../assets/vertical.png'
import Group from '../../assets/Group.png'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function About() {
    return (
        <section className='about__section'>
            <div className="about__top">
                <div className="about__top__left">
                    <h4>ABOUT US</h4>
                    <h2>The company leads entire webdesign process from concept to delivery.</h2>
                </div>
                <div className="about__top__right">
                    <h3>The Era Of Technology</h3>
                    <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
                </div>
            </div>
            <div className="about__middle">
                <img src={Middle1} alt='1' />
                <img src={Middle2} alt='2' />
                <div className="third__image">
                    <img src={Middle3} alt='' />
                    <img className='vertical' src={Vertical} alt='' />
                </div>
            </div>
            <div className="about__bottom">
                <div className="bottom-left">
                    <div className="group">
                        <p className='numbers'>1560+</p>
                        <img src={Group} alt='' />
                        <p className='text'>Projet Delivered</p>
                    </div>
                    <div className="group">
                        <p className='numbers'>100+</p>
                        <img src={Group} alt='' />
                        <p className='text'>professional</p>
                    </div>
                    <div className="group">
                        <p className='numbers'>950+</p>
                        <img src={Group} alt='' />
                        <p className='text'>Happy Client</p>
                    </div>
                    <div className="group">
                        <p className='numbers'>10 yrs</p>
                        <img src={Group} alt='' />
                        <p className='text'>Experience</p>
                    </div>
                </div>
                <div className="bottom-right">
                    <a href="/">Read about us</a>
                    <HiOutlineArrowNarrowRight />
                </div>
            </div>
        </section>
    )
}

export default About
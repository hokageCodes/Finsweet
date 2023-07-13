import CareerImg from '../../assets/career.png'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import './careers.css'

export default function Careers() {
    return (
        <section className='careers__container'>
            <h4>CAREER AT FINSWEET</h4>
            <h2>We hired people who are Always Passionate about what they do</h2>
            <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw .</p>
            <img src={CareerImg} alt=''/>
            <h4 className='second__heading'>see Our Open Positions</h4>
            <span>👇</span>

            <div className="career__listing">
                <div className="listing">
                    <h4>Full Stack Developer</h4>
                    <p className='listing__location'>Bengaluru · Full Time </p>
                    <p className='listing__price'>$10K - $18K · No equity</p>
                    <div className="careers__listing__link">
                    <a href="/">Apply Now</a>
                    <HiOutlineArrowNarrowRight className='arrow' />
                </div>
                </div>
                <div className="listing">
                    <h4>Testing Engineeer</h4>
                    <p>Remote · Full Time </p>
                    <p>$08K - $10K · No equity</p>
                    <a href="/">Apply Now</a>
                </div>
                <div className="listing">
                    <h4>Hr Manager</h4>
                    <p>Mumbai . Fultime</p>
                    <p>$08K - $10K · 4 to 5 Yrs Exp</p>
                    <a href="/">Apply Now</a>
                </div>
            </div>
        </section>
    )
}

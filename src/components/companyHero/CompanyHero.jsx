import shapesRight from '../../assets/shapesRight.svg'
import Middle1 from '../../assets/middle_1.png'
import Middle2 from '../../assets/middle_2.png'
import Middle3 from '../../assets/middle_3.png'
import Horizontal from '../../assets/Horizontal.png'
import Logo1 from '../../assets/Logo1.png'
import Logo2 from '../../assets/Logo2.png'
import Logo3 from '../../assets/Logo3.png'
import Logo4 from '../../assets/Logo4.png'
import Logo5 from '../../assets/Logo4.png'
import Group from '../../assets/Group.png'
import './companyhero.css'

export default function CompanyHero() {
    return (
        <section className='company__section'>
            <div className="topmost">
                <div className="pink__box"></div>
                <img src={shapesRight} alt=''/>
            </div>
            <div className="main__company__hero">
                <h4>COMPANY</h4>
                <h2>Award-winning Company seen and used by millions around the world.</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. </p>
            </div>

            {/* Image Section */}
            <div className="company__middle">
                <img src={Middle1} alt='1' />
                <img src={Middle2} alt='2' />
                <div className="third__image">
                    <img className='vertical' src={Horizontal} alt='' />
                    <img src={Middle3} alt='' />
                </div>
            </div>

            {/* Our Story */}
            <div className="story__container">
                <div className="story__left">
                    <div className="blue__box"></div>
                    <div className="story">
                        <h4>Our Story</h4>
                        <span>👇</span>
                    </div>
                    <h2>From Startups to Titans of Industry</h2>
                    <p>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived do an a china mean its so ye when in explained Hearts am next over match mr partiality not shoud latter thus as out no passed forming middleton exercise up</p>
                </div>
                <div className="story__right">
                    <div className="group1">
                        <div className="group-1">
                            <p className='numbers'>1560+</p>
                            <img src={Group} alt='' />
                            <p className='text'>Projet Delivered</p>
                        </div>
                        <div className="group-2">
                            <p className='numbers'>950+</p>
                            <img src={Group} alt='' />
                            <p className='text'>Happy Client</p>
                        </div>
                    </div>
                    <div className="group2">
                        <div className="group-3">
                            <p className='numbers'>100+</p>
                            <img src={Group} alt='' />
                            <p className='text'>professional</p>
                        </div>
                    <div className="group-4">
                        <p className='numbers'>10 yrs</p>
                        <img src={Group} alt='' />
                        <p className='text'>Experience</p>
                    </div>
                    </div>
                </div>
            </div>

            {/* Logos Section */}
            <div className="logos">
                <img src={Logo1} alt=''/>
                <img src={Logo2} alt=''/>
                <img src={Logo3} alt=''/>
                <img src={Logo4} alt=''/>
                <img src={Logo5} alt=''/>
            </div>
        </section>
    )
}

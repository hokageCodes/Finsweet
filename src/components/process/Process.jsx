import RightShape from '../../assets/ShapesRight.svg'
import Discover from '../../assets/discover.svg'
import Design from '../../assets/design.svg'
import Develop from '../../assets/develop.svg'
import Test from '../../assets/testing.svg'
import Deploy from '../../assets/deployment.svg'
import Maintain from '../../assets/maintain.svg'
import Full from '../../assets/fullHori.png'
import './process.css'

function Process() {
    return (
        <section className="process__container">
            <div className="process__top">
                <div className="top__left"> 
                    <h4>OUR PROCESS</h4>
                    <h2>The process we are working With Our client Worldwide</h2>
                    <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
                </div>
                <div className="top__right">
                    <img src={RightShape} alt="" />
                </div>
            </div>
            <div className="process__bottom">
                <div className="process__one">

                    <div className="process__card">
                        <p>01</p>
                        <div className="card__details">
                            <img src={Discover} alt="" />
                            <div className="card__text">
                                <h4>Discover</h4>
                                <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                            </div>
                            {/* <img className='full' src={Full} alt="" /> */}
                        </div>
                    </div>
                    <div className="process__card">
                        <p>02</p>
                        <div className="card__details">
                            <img src={Discover} alt="" />
                            <div className="card__text">
                                <h4>Discover</h4>
                                <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                            </div>
                        </div>
                    </div>
                    <div className="process__card">
                        <p>03</p>
                        <div className="card__details">
                            <img src={Discover} alt="" />
                            <div className="card__text">
                                <h4>Discover</h4>
                                <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="process__two">

                    <div className="process__card">
                        <p>04</p>
                        <div className="card__details">
                            <img src={Discover} alt="" />
                            <div className="card__text">
                                <h4>Discover</h4>
                                <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                            </div>
                        </div>
                    </div>
                    <div className="process__card">
                        <p>05</p>
                        <div className="card__details">
                            <img src={Discover} alt="" />
                            <div className="card__text">
                                <h4>Discover</h4>
                                <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                            </div>
                        </div>
                    </div>
                    <div className="process__card">
                        <p>06</p>
                        <div className="card__details">
                            <img src={Discover} alt="" />
                            <div className="card__text">
                                <h4>Discover</h4>
                                <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process
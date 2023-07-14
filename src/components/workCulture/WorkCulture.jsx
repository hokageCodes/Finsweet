import './workculture.css'
import Covid from '../../assets/covid.svg'
import Time from '../../assets/time.svg'
import Home from '../../assets/home.svg'
import Party from '../../assets/party.svg'
import Cash from '../../assets/cash.svg'
import Flex from '../../assets/flex.svg'

export default function WorkCulture() {
    return (
        <section className='culture__container'>
            <div className="top">
                <h4>OUR WORK & CULTURE</h4>
                <h2>Come and join a team of highly skilled professionals.</h2>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.</p>
            </div>
            <div className="bottom">
                <div className="culture__card">
                    <div className="card__icon">
                        <img src={Covid} alt='' />
                    </div>
                    <h4>Covid-19 Insurance</h4>
                    <p>Through True Rich Attended does no end it his mother since real had halfdoes no end it.</p>
                </div>
                <div className="culture__card">
                    <div className="card__icon">
                        <img src={Time} alt='' />
                    </div>
                    <h4>Flexible working time</h4>
                    <p>Through True Rich Attended does no end it his mother since real had halfdoes no end it.</p>
                </div>
                <div className="culture__card">
                    <div className="card__icon">
                        <img src={Home} alt='' />
                    </div>
                    <h4>Work from home</h4>
                    <p>Through True Rich Attended does no end it his mother since real had halfdoes no end it.</p>
                </div>
                <div className="culture__card">
                    <div className="card__icon">
                        <img src={Party} alt='' />
                    </div>
                    <h4>Annual retreats</h4>
                    <p>Through True Rich Attended does no end it his mother since real had halfdoes no end it.</p>
                </div>
                <div className="culture__card">
                    <div className="card__icon">
                        <img src={Cash} alt='' />
                    </div>
                    <h4>Learning stipend</h4>
                    <p>Through True Rich Attended does no end it his mother since real had halfdoes no end it.</p>
                </div>
                <div className="culture__card">
                    <div className="card__icon">
                        <img src={Flex} alt='' />
                    </div>
                    <h4>Gym membership</h4>
                    <p>Through True Rich Attended does no end it his mother since real had halfdoes no end it.</p>
                </div>
            </div>
        </section>
    )
}

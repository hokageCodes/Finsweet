import './ourteam.css'
import Team1 from '../../assets/Team1.png'
import Team2 from '../../assets/Team2.png'
import Team3 from '../../assets/Team3.png'
import Team4 from '../../assets/Team4.png'
import Team6 from '../../assets/Team6.png'
import Team7 from '../../assets/Team7.png'

export default function OurVision() {
    return (
        <section className='our__team__container'>
            <div className="team__top">
                <h4>MEET OUR TEAM</h4>
                <h2>Teamwork is the only way we work </h2>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
            </div>
            <div className="team__bottom">
                <div className="team__image__top">
                    <img src={Team1} alt=''/>
                    <img src={Team2} alt=''/>
                    <img src={Team3} alt=''/>
                    <img src={Team4} alt=''/>
                </div>
                <div className="team__image__bottom">
                    <img src={Team4} alt=''/>
                    <img src={Team6} alt=''/>
                    <img src={Team7} alt=''/>
                    <img src={Team7} alt=''/>
                </div>
            </div>
        </section>
    )
}

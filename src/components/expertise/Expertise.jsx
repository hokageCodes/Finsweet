import Rocket from '../../assets/rocket.svg'
import Settings from '../../assets/settings.svg'
import CallCare from '../../assets/callcare.svg'
import Horizontal from '../../assets/Horizontal.png'
import './expertise.css'
function Expertise() {
    return (
        <section className='expertise__container'>
            <div className="expertise__left">
                <h4>OUR EXPERTISE</h4>
                <h2>We want to get local identification in every corner of the world in this era of global citizenship</h2>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
            </div>
            <div className="expertise__right">
                <div className="card__group">
                    <img src={Rocket} alt="4" />
                    <div className="text">
                        <h4>On Time Delivery</h4>
                        <p>Through True Rich Attended does no end it his mother since real had half every him.</p>
                    </div>
                </div>
                <div className="card__group">
                    <img src={Settings} alt="4" />
                    <div className="text">
                        <h4>Best Quality</h4>
                        <p>Through True Rich Attended does no end it his mother since real had half every him.</p>
                    </div>
                </div>
                <div className="card__group">
                    <img src={CallCare} alt="4" />
                    <div className="text">
                        <h4>Support Assist</h4>
                        <p>Through True Rich Attended does no end it his mother since real had half every him.</p>
                    </div>
                </div>
                <img className='horizontal' src={Horizontal} alt="4" />
            </div>
        </section>
    )
}

export default Expertise
import './servicesmain.css'
import perService1 from '../../assets/perservice1.png'
import perService2 from '../../assets/perservice2.png'
import perService3 from '../../assets/perservice3.png'
import perService4 from '../../assets/perservice4.png'
import perService5 from '../../assets/perservice5.png'

export default function ServicesMain() {
    return (
        <section className="servicesmain__container">
            <div className="perservice per1">
                <div className="top">
                    <h4>Technical Support</h4>
                    <h3>Best in class tech support for your company. We become your tech backbone</h3>
                    <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
                </div>
                <div className="perservice__img">
                    <img src={perService1} />
                </div>
            </div>
            <div className="perservice per2">
                <div className="perservice__img">
                    <img src={perService2} />
                </div>
                <div className="top">
                    <h4>Development</h4>
                    <h3>Bring your ideas to reality with certified team of developers, working with latest technologies</h3>
                    <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
                </div>
            </div>
            <div className="perservice per3">
                <div className="top">
                    <h4>AWS/Azure</h4>
                    <h3>We help you deploy, manage and secure your application on leading web services</h3>
                    <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
                </div>
                <div className="perservice__img">
                    <img src={perService3} />
                </div>
            </div>
            <div className="perservice per4">
                <div className="perservice__img">
                    <img src={perService4} />
                </div>
                <div className="top">
                    <h4>Consulting</h4>
                    <h3>Get advice from world class professionals</h3>
                    <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
                </div>
            </div>
            <div className="perservice per5">
                <div className="top">
                    <h4>Information Technology</h4>
                    <h3>We want to get local identification in every corner of the world in this era of global citizenship</h3>
                    <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
                </div>
                <div className="perservice__img">
                    <img src={perService5} />
                </div>
            </div>
        </section>
    )
}

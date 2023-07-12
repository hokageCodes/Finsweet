import VisionImg from '../../assets/vision.png'
import './ourvision.css'
export default function OurVision() {
    return (
        <section className='our__vision__container'>
            <div className="vision__top">
                <h4>OUR VISION</h4>
                <h2>We want to get local identification in every corner of the world in this era of global citizenship.</h2>
                <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
            </div>
            <div className="vision__bottom">
                <img src={VisionImg} alt="" />
            </div>
        </section>
    )
}

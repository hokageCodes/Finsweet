import Vertical from '../../assets/vertical.png'
import './newsletter.css'

function Newsletter() {
    return (
        <section className='newsletter__section'>
            <div className="newsletter__left">
                <h4>NEWSLETTER</h4>
                <h2>Subscribe our News Letter to get Latest Updates.</h2>
            </div>
            <div className="newsletter__right">
                <input type="text" placeholder="Paresh@Pixeto.com" />
            </div>
            <img className='newsletter__vertical' src={Vertical} alt="" />
        </section>
    )
}

export default Newsletter
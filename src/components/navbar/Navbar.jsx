import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import './navbar.css'

function Navbar() {
    return (
        <nav className='nav__container'>
            <h2>Finsweet</h2>
            <div>
                <ul className="nav__links">
                    <li>Home</li>
                    <li>Service</li>
                    <li>Company</li>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                    <div className="cta__link">
                        <a href="/">Clone project</a>
                        <HiOutlineArrowNarrowRight />
                    </div>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar
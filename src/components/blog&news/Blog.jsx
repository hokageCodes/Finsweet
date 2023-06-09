import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import Blog1 from '../../assets/blog1.png'
import Blog2 from '../../assets/blog2.png'
import './blog.css' 

function Blog() {
    return (
        <section className="blog__container">
            <div className="blog__top">
                <div className="blue__box"></div>
                <h2>Read our latest blogs & news</h2>
            </div>
            <div className="blog__bottom">
                <div className="blog__card">
                    <div className="blog__card__left">
                        <img src={Blog1} alt="" />
                    </div>
                    <div className="blog__card__right">
                        <p>Jan 19, 2021</p>
                        <h3>Today’s best design trends for digital products</h3>
                        <div className="blog__card__link">
                            <a href="/">Read about us</a>
                            <HiOutlineArrowNarrowRight />
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__card__left">
                        <img src={Blog2} alt="" />
                    </div>
                    <div className="blog__card__right">
                        <p>Jan 19, 2021</p>
                        <h3>A practical guide to building a brand strategy</h3>
                        <div className="blog__card__link">
                            <a href="/">Read about us</a>
                            <HiOutlineArrowNarrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
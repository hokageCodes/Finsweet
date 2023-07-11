import Hero from "../components/hero/Hero"
import About from "../components/about/About"
import Expertise from "../components/expertise/Expertise"
import Services from "../components/services/Services"
import Process from "../components/process/Process"
import Testimonial from "../components/testimonial/Testimonial"
import Blog from "../components/blog&news/Blog"
import Newsletter from "../components/newsletter/Newsletter"

function LandingPage() {
    return (
        <div>
            <Hero />
            <About />
            <Expertise />
            <Services />
            <Process />
            <Testimonial />
            <Blog />
            <Newsletter />
        </div>
    )
}

export default LandingPage
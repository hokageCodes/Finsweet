import Navbar from "../components/navbar/Navbar"
import Hero from "../components/hero/Hero"
import About from "../components/about/About"
import Expertise from "../components/expertise/Expertise"
// import Blog from "../components/blog&news/Blog"
// import FooterTop from "../components/footer/FooterTop"
// import Newsletter from "../components/newsletter/Newsletter"
// import Process from "../components/process/Process"
// import Services from "../components/services/Services"
// import Testimonial from "../components/testimonial/Testimonial"

function LandingPage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Expertise />
            {/* <Services />
            <Process />
            <Testimonial />
            <Blog />
            <Newsletter />
            <FooterTop /> */}
        </div>
    )
}

export default LandingPage
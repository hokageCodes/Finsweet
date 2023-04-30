import './App.css'
import About from './components/about/About'
import Blog from './components/blog&news/Blog'
import Expertise from './components/expertise/Expertise'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Process from './components/process/Process'
import Services from './components/services/Services'
import Testimonial from './components/testimonial/Testimonial'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Services />
      <Process />
      <Testimonial />
      <Blog />
    </>
  )
}

export default App

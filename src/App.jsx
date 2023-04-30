import './App.css'
import About from './components/about/About'
import Expertise from './components/expertise/Expertise'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Process from './components/process/Process'
import Services from './components/services/Services'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Services />
      <Process />
    </>
  )
}

export default App

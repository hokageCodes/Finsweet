import './App.css'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ServicesPage from './pages/ServicesPage'
import CompanyPage from './pages/CompanyPage'
import CareersPage from './pages/CareersPage/'
import Navbar from './components/navbar/Navbar'
import FooterTop from './components/footer/FooterTop'

function App() {
  return (
      <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/company' element={<CompanyPage />} />
          <Route path='/careers' element={<CareersPage />} />
        </Routes>
        <FooterTop />
      </Router>
      </>
    )
}

export default App

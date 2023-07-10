import './App.css'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ServicesPage from './pages/ServicesPage'

function App() {
  return (
      <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/services' element={<ServicesPage />} />
        </Routes>
      </Router>
      </>
    )
}

export default App

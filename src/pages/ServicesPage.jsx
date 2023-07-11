import Navbar from '../components/navbar/Navbar'
import FooterTop from '../components/footer/FooterTop'
import Newsletter from '../components/newsletter/Newsletter'
import ServicesHero from '../components/servicesHero/ServicesHero'
import Process from '../components/process/Process'
import ServicesMain from '../components/serviceMain/ServicesMain'

export default function ServicesPage() {
  return (
    <>
        <Navbar />
        <ServicesHero />
        <Process />
        <ServicesMain />
        <Newsletter />
        <FooterTop />
    </>
  )
}

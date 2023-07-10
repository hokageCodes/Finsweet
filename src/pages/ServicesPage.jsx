import React from 'react'
import Navbar from '../components/navbar/Navbar'
import FooterTop from '../components/footer/FooterTop'
import Newsletter from '../components/newsletter/Newsletter'
import ServicesHero from '../components/servicesHero/ServicesHero'

export default function ServicesPage() {
  return (
    <>
        <Navbar />
        <ServicesHero />
        <Newsletter />
        <FooterTop />
    </>
  )
}

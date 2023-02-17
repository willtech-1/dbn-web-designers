import Head from 'next/head'
import Navbar from '../components/Navbar'
import HomePage from '../components/HomePage'
import OurWork from '../components/OurWork'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Durban Web Designers</title>
        <meta name="description" content="Durban Web Designers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* import components */}
      <Navbar />
      <HomePage />
      <OurWork />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  )
}

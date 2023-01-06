import GoalsSection from '../components/GoalsSection'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Testimonial from '../components/Testimonial'
import Feature from '../components/Feature'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <div className="px-6 py-8 md:px-40 md:py-12 bg-customWhite">
        <Header />
        <SubHeader />
      </div>
      <GoalsSection />
      <Testimonial />
      <Feature />
      <NewsLetter />
      <Footer />
    </>
  )
}

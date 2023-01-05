import GoalsSection from '../components/GoalsSection'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Testimonial from '../components/Testimonial'
import Feature from '../components/Feature'

export default function Home() {
  return (
    <>
      <div className="px-6 py-8">
        <Header />
        <SubHeader />
      </div>
      <GoalsSection />
      <Testimonial />
      <Feature />
    </>
  )
}

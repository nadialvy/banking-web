import GoalsSection from '../components/GoalsSection'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'

export default function Home() {
  return (
    <>
      <div className="px-6 py-8">
        <Header />
        <SubHeader />
      </div>
      <GoalsSection />
    </>
  )
}

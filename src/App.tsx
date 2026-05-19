import './App.css'

import { AboutSection } from './components/AboutSection'
import { FeaturedProjects } from './components/FeaturedProjects'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WorkExperience } from './components/WorkExperience'

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main id="home" className="home-page">
        <Hero />
        <AboutSection />
        <WorkExperience />
        <FeaturedProjects />
      </main>

      <Footer />
    </div>
  )
}

export default App

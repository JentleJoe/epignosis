import { Route, Routes } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import FloatingParticles from './components/common/FloatingParticles'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Services from './components/sections/Services'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import PortfolioPage from './pages/PortfolioPage'

function App() {
  return (
    <div className="app">
      <FloatingParticles count={15} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main>
                <Hero />
                <About />
                <Experience />
                <Education />
                <Services />
                <FAQ />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </div>
  )
}

export default App

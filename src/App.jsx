import Header from './components/common/Header'
import Footer from './components/common/Footer'
import FloatingParticles from './components/common/FloatingParticles'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
// import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
// import Portfolio from './components/sections/Portfolio'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="app">
      <FloatingParticles count={15} />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        {/* <Projects /> */}
        <Services />
        {/* <Portfolio /> */}
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

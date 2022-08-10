import './App.css'
import { Home, HomeAlone } from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <Home />
      <HomeAlone /> 
      <Header />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App

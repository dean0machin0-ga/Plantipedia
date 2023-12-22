import { Route, Routes } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Plants from './pages/Plants'
import PlantDetails from './pages/PlantDetails'
import Home from './pages/Home'
import About from './pages/About'
// import Collection from './pages/Collection'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/details" element={<PlantDetails />} />
          <Route path="/details/:id" element={<PlantDetails />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/collection" element={<Collection />} /> */}
        </Routes>
      <Footer />
    </div>
  )
}

export default App
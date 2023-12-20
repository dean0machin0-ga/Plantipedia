import { Route, Routes } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Plants from './pages/Plants'
import PlantDetails from './pages/PlantDetails'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Header />
        <Routes>
          <Route path="/" element={<Plants />} />
          <Route path="/details" element={<PlantDetails />} />
          <Route path="/details/:id" element={<PlantDetails />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
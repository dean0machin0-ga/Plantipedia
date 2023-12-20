import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
// import axiosInstance from './axiosConfig'
import Header from './components/Header/index'
// import Main from './components/Main/index'
import Plants from './pages/Plants'
import PlantDetails from './pages/PlantDetails'

function App() {
  const [plant, setPlant] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

//   const fetchPlants = async() => {
//     try {
//         const response = await fetch ('https://house-plants2.p.rapidapi.com/all')
//         const plantData = await response.json()
//         setPlant(plantData)
//     }   catch (err) {
//         console.log(err)
//     }
// }

// useEffect(() => {
//   fetchPlants()
// }, [])


  return (
    <>
      <header>
        <h1>
          <a href="/">PLANTOPEDIA</a>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Plants />} />
          <Route path="/details" element={<PlantDetails />} />
          <Route path="/details/:id" element={<PlantDetails />} />
        </Routes>
      </main>
    </>
  )
}

export default App

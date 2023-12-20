import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import axios from 'axios'
import Header from './components/Header/index'
import Main from './components/Main/index'
import Plant from './pages/Plants'
import './App.css'


const options = {
  method: 'GET',
  url: 'https://house-plants2.p.rapidapi.com/id/53417c12-4824-5995-bce0-b81984ebbd1d',
  headers: {
    'X-RapidAPI-Key': '71b12d4b25mshb3f90218c7116aap18f41ejsnd8bd73c57ee9',
    'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

function App() {
  const [plant, setPlant] = useState([])

  useEffect(() => {
    getPlant()
  }, [])

  return (
    <>
      <header>
        <h1>
          <a href="/">PLANTOPEDIA</a>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Plants /> } />
          <Route path="/details" element={<PlantDetails />} />
          <Route path="/details/:id" element={ <PlanDetails />} />
        </Routes> 
      </main>
    </>
  );
}

export default App;

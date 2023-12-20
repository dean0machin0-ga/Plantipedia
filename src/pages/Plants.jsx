import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Plants = () => {
    const [plant, setPlant] = useState([])
    
    const url = 'https://house-plants2.p.rapidapi.com/all-lite';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '71b12d4b25mshb3f90218c7116aap18f41ejsnd8bd73c57ee9',
            'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
        }
    };

    const fetchPlants = async() => {
        try {
            const response = await fetch (url, options)
            const plantData = await response.json()
            console.log(plantData)
            setPlant(plantData)
        }   catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchPlants()
    }, [])
        
        return (
            <section className="container">
                {/* <h1>PLANT PAGE</h1> */}
                {
                    plant.map((plant) => {
                        return (
                            <Link to={`/details/${ plant.id }`} key={ plant.id } >
                                <div className="card">
                                    <div className="card-image">
                                        <img
                                            src={ plant.Img }
                                            alt={ plant.commonName }
                                        />
                                    </div>
                                <div className="card-title">
                                    <h3>{ plant.commonName }</h3>
                                </div>
                                <div>
                                    <h2>Plant Category:</h2>
                                    <h3>{ plant.Categories }</h3>
                                    <h2>Climate:</h2>
                                    <h3>{ plant.Climat}</h3>
                                </div>
                            </div>
                        </Link>
                        )
                    })}
                </section>
                )
            }

export default Plants
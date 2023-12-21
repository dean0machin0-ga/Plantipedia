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
                {
                    plant.map((plant) => {
                        return (
                            <Link to={`/details/${ plant.id }`} key={ plant.id } >
                                <div className="card">
                                    <div className="card-image">
                                        <img
                                            src={ plant.Img }
                                            alt={ plant.id }
                                        />
                                    </div>
                                <div className="card-title">
                                <ul>
                                    { plant["Common name"] && plant["Common name"].map((name, index) => (
                                    <li key={ index }>{ name }</li>
                                    ))}
                                </ul>
                                </div>
                                <div>
                                    <h3>{ plant["Latin name"] }</h3>
                                </div>
                            </div>
                        </Link>
                        )
                    })}
                </section>
                )
            }

export default Plants
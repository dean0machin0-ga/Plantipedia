import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

// const axios = require('axios');
const Plants = (props) => {
    const [plant, setPlant] = useState([])
        useEffect(() => {
            fetchPlants()
        }, [])
    
        const fetchPlants = async() => {
            try {
                const response = await fetch ("https://house-plants2.p.rapidapi.com/id/53417c12-4824-5995-bce0-b81984ebbd1d")
                const plantData = await response.json()
                setBirds(plantData)
            }   catch (err) {
                console.log(err)
            }
        }
        
        return (
            <section className="container">
                <h1>PLANT PAGE</h1>
                {
                    plants.map((plant) => {
                        return (
                            <Link to={`/details/${ plant._id }`} key={ plant._id } >
                                <div className="card">
                                    <div className="card-image">
                                        <img
                                            src={ plant.image }
                                            alt={ plant.name }
                                        />
                                    </div>
                                <div className="card-title">
                                    <h3>{ bird.name }</h3>
                                </div>
                            </div>
                        </Link>
                        )
                    })}
                </section>
                )
            }

export default Plants
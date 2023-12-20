/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


const plantDetails = () => {
    const [plant, setPlant] = useState([])
    const { id } = useParams()
    const url = `https://house-plants2.p.rapidapi.com/id/${id}`
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '71b12d4b25mshb3f90218c7116aap18f41ejsnd8bd73c57ee9',
            'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
        }
    }
const fetchPlantDetails = async() => {
        try {
            const response = await fetch(url, options)
            const result = await response.json()
            console.log(result)
            setPlant(result)
        }   catch (err) {
            console.log(err)
        }}
    
    
    useEffect(() => {
        fetchPlantDetails()
    }, [id])

return (
    <div className="details-container">
        <div key={ plant.id } className="details-container">
            <h2>Common Names:</h2>
            <ul>
                { plant["Common name"] && plant["Common name"].map((name, index) => (
                    <li key={ index }>{ name }</li>
                    ))}
            </ul>
                    <img
                        src={ plant.Img}
                        alt={ plant.id }
                    />
            <h2>Appeal:</h2>
            <h3>{ plant.Appeal }</h3>
            <h2>Blooming Season:</h2>
            <ul>
                { Array.isArray(plant["Blooming season"]) && plant["Blooming season"].map((name, index) => (
                    <li key={ index }>{ name }</li>
                    ))}
            </ul>
            <h2>Natural Climate:</h2>
            <h3>{ plant.Climat }</h3>
            <h2>Plant Catagory:</h2>
            <h3>{ plant.Categories }</h3>
            <h2>Plant Family:</h2>
            <h3>{ plant.Family }</h3>
            <a
                href={ plant.homepage }
                target="_blank"
                rel="noopener noreferrer"
            >
                <button>RETURN</button>
            </a>
        </div>
    </div>
    );
}

export default plantDetails
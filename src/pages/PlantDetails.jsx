/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const plantDetails = (props) => {
    const [plant, setPlant] = useState([])
    const { id } = useParams()
    const url = `https://house-plants2.p.rapidapi.com/id/53417c12-4824-5995-bce0-b81984ebbd1d${_id}`
    
    const getPlant = async () => {
        try {
            const response = await fetch(url)
            const plantData = await response.json()
            setPlant(plantData)
            console.log(plantData)
        }   catch (err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        getplant()
    }, [])

return (
    <div className="details-container">
        <img
            src={ plant.image}
            alt={ plant.name}
        />
        <div key={ plant.id } className="details-container">
            <h2>{ plant.name }</h2>
            <h3>{ plant.genus }</h3>
            {/* <p>{ plant. }</p> */}
            <a
                href={ plant.homepage }
                target="_blank"
                rel="noopener noreferrer"
            >
                
            </a>
        </div>
    </div>
    );
}

export default plantDetails
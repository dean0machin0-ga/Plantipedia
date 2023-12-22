import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Header() {
    
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        borderBottom: ".2rem solid black",
        padding: ".5rem",
        width: "90%",
        margin: "auto",
    }
    
    const [header, setHeader] = useState([])
    const url = 'https://house-plants2.p.rapidapi.com/all-lite'

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '71b12d4b25mshb3f90218c7116aap18f41ejsnd8bd73c57ee9',
            'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
        }
    }

    const getHeaderData = async () => {
    const response = await fetch(url, options)
    const result = await response.json()
    setHeader(result)
    }

    useEffect(() => {
        getHeaderData()
    }, [] )
    
    const loaded = () => (
        <header>
            
            <nav style={navStyle}>
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to="/plants">
                    <div>PLANTS</div>
                </Link>
                <Link to="/about">
                    <div>ABOUT</div>
                </Link>
            </nav>
            <h1>PLANTOPEDIA</h1>
        </header>
    )
    return header ? loaded() : <h1>loading...</h1>
}
export default Header
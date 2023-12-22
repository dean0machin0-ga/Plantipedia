import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Header() {
    
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        borderBottom: ".2rem solid grey",
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
                    <button>HOME</button>
                </Link>
                <Link to="/plants">
                    <button>PLANTS</button>
                </Link>
                <Link to="/about">
                    <button>ABOUT</button>
                </Link>
            </nav>
            <h1 className="font-bold text-2xl text-black outline-4">PLANTOPEDIA</h1>
        </header>
    )
    return header ? loaded() : <h1>loading...</h1>
}
export default Header
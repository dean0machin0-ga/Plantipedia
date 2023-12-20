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

    const getHeaderData = async () => {
    const response = await fetch("")
    const data = await response.json()
    setHeader(data)
    }

    useEffect(() => {
        getHeaderData()
    }, [] )
    
    const loaded = () => (
        <header>
            <h1>PLANTOPEDIA</h1>
            <nav style={navStyle}>
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to="/Plants">
                    <div>PLANTS</div>
                </Link>
                <Link to="/Collection">
                    <div>COLLECTION</div>
                </Link>
            </nav>
        </header>
    )
    return header ? loaded() : <h1>loading...</h1>
}
export default Header
import { useState, useEffect } from 'react'
import growstera from '../assets/growstera.mp4'
import SearchBar from '../components/SearchBar'

function Home() {
    const handleSearch = (query) => {
        
        console.log(`Searching for plants with query: ${query}`)
    }
    return (
        <div className="home">
            <video src={growstera} autoPlay loop muted />
            <SearchBar onSearch={handleSearch} />
        </div>
    )
}

export default Home
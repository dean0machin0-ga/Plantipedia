import growstera from '../assets/growstera.mp4'


function Home() {
    return (
        <div className="home">
            <video src={growstera} autoPlay loop muted />
        </div>
    )
}
export default Home
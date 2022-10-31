import Card from "../components/card"


export default function Favorites({ favorites }) {
    return (
        <div>
            <h2>Favorites</h2>
            {favorites.map((showData) => {
                return (
                    <Card
                        name ={weather.name} 
                        temperature={weather.main.temp} 
                    />
                )
            })}
        </div>
    )
}
import './app.scss'
import Header from "./components/Header/Header.tsx";
import Nav from './components/Nav/Nav.tsx'
import Hotel from "./components/Hotel/Hotel.tsx";
import {useState} from "react";

function App() {
    const hotelsData = [
        {
            id: 1,
            name: 'Hotel Royal Tulip',
            description: 'Dzięki naszemu narzędziu do generowania tekstu wypełniania , oprócz dostosowywania tekstu za pomocą elementów HTML , masz możliwość utworzenia nowego, zaczynającego się bezpośrednio od tekstu!1',
        },
        {
            id: 2,
            name: 'Hotel Sunshine Paradise',
            description: 'Dzięki naszemu narzędziu do generowania tekstu wypełniania , oprócz dostosowywania tekstu za pomocą elementów HTML , masz możliwość utworzenia nowego, zaczynającego się bezpośrednio od tekstu!2',
        },
        {
            id: 3,
            name: 'Hotel Varsovia',
            description: 'Dzięki naszemu narzędziu do generowania tekstu wypełniania , oprócz dostosowywania tekstu za pomocą elementów HTML , masz możliwość utworzenia nowego, zaczynającego się bezpośrednio od tekstu!3',
        }
    ]

    const [hotels, setHotels] = useState(hotelsData);

    // const handlerInput = (e) => {
    //     const value = e.target.value;
    //     console.log(value);
    //     hotels.map(hotel => {
    //         if (hotel.name.toLowerCase().includes(value.toLowerCase())) {
    //             setHotels(hotels)
    //         }
    //     });
    // }

    const handlerInput = (arr) => {
        console.log(`${arr} takxd`)
    }

    return (
        <>
            <Nav/>
            <Header onSearch={handlerInput}/>

            {/*<input onChange={handlerInput} type='text' />*/}

            <div style={{maxWidth: '800px', margin: '0 auto'}}>
                {hotels.map((hotel) => (
                    <Hotel key={hotel.id} title={hotel.name} des={hotel.description}/>
                ))}
            </div>
        </>
    );
}

export default App;
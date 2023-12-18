import './app.scss';
import Header from "./components/Header/Header.tsx";
import Nav from "./components/Nav/Nav.tsx";
import Hotels from "./components/Hotels/Hotels.tsx";
import {useState} from "react";
import data from "./api/data.json";
import {SearchFunction} from "./interfaces/HeaderData.tsx";

function App() {

    const [hotels, setHotels] = useState(data.hotels);

    const searchHotels: SearchFunction = (value: string) => {
        const filterHotels = [...data.hotels].filter(hotel => hotel.name.toLowerCase().includes(value.toLowerCase()));
        setHotels(filterHotels);
    };

    return (
        <>
            <Nav/>
            <Header searchHotels={searchHotels}/>
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
                <Hotels hotels={hotels}/>
            </div>
        </>
    );
}

export default App;
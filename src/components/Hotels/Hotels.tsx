import Hotel from "../Hotel/Hotel.tsx"
import {HotelData} from "../../interfaces/HotelData.tsx"

interface HotelsProps {
    hotels: HotelData[]
}

function Hotels(props: HotelsProps) {
    return (
        <>
            {props.hotels.map(hotel =>
                <Hotel key={hotel.id} {...hotel}/>
            )}
        </>
    )
}

export default Hotels
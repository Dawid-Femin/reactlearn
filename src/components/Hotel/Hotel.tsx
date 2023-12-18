import style from './Hotel.module.scss'

interface HotelProps {
    id: number;
    name: string;
    description: string;
    location: string;
    img: string;
    rate: number;
}

function Hotel(props: HotelProps) {
    const {hotel, hotel__img, hotel__content, hotel__title, hotel__description} = style
    const {name, description, img} = props

    return (
        <div className={hotel}>
            <img className={hotel__img}
                 src={img}/>
            <div className={hotel__content}>
                <h2 className={hotel__title}>{name}</h2>
                <p className={hotel__description}>{description}</p>
            </div>
        </div>
    )
}

export default Hotel
import style from './Hotel.module.scss'

function Hotel(props: { title: string, des: string }) {
    const {hotel, hotel__img, hotel__content, hotel__title, hotel__description} = style
    const {title, des} = props

    return (
        <div className={hotel}>
            <img className={hotel__img}
                 src='https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            <div className={hotel__content}>
                <h2 className={hotel__title}>{title}</h2>
                <p className={hotel__description}>{des}</p>
            </div>
        </div>
    )
}

export default Hotel
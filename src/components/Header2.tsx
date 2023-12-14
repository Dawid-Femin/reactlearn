import '../styles/_header2.scss'
import {useState} from "react";

const Header2 = () => {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1682685797886-79020b7462a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1702145754106-05d909f08c9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ]

    const [currentImage, setCurrentImage] = useState(0)

    return (
        <div className='header2'>
            <div style={{backgroundImage: `url(${slides[0].url})`}} className='header2__box'></div>
        </div>
    )
}

export default Header2
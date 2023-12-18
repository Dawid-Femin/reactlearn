import { useState } from "react";
import style from "./Header.module.scss";
import SearchBar from "../SearchBar/SearchBar.tsx";
import {SearchFunction} from "../../interfaces/HeaderData.tsx";

interface HeaderProps {
    searchHotels: SearchFunction;
}

const Header = (props: HeaderProps) => {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(1);

    const moveRight = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const moveLeft = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className={style.header}>
            <div className={style.header__image} style={{ backgroundImage: `url(${slides[currentImageIndex].url})` }}></div>
            <div className={style.header__input}>
                <SearchBar searchHotels={props.searchHotels} />
            </div>
            <div className={style.header__rightArrow} onClick={moveRight}>RIGHT</div>
            <div className={style.header__leftArrow} onClick={moveLeft}>LEFT</div>
        </div>
    );
};

export default Header;
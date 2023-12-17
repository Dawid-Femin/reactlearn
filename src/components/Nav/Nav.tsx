import { useState, useEffect } from 'react';
import style from './Nav.module.scss'

const Nav = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleActive = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 100) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener('scroll', handleActive);

        return () => {
            window.removeEventListener('scroll', handleActive);
        };
    }, []);

    return (
        <>
            <nav className={`${style.nav} ${active ? style.active : ''}`}>
                <div className={style.container}>
                    <div className={style.nav__logo}>LOGO</div>
                    <div className={style.nav__menu}>
                        <ul>
                            <li>Homepage</li>
                            <li>About</li>
                            <li>Shop</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;

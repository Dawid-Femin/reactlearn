import { useState, useEffect } from 'react';
import '../styles/_nav.scss';

const containerStyles = {
    maxWidth: '1280px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto',
    height: '100%',
};

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

    const navClassName = `nav ${active ? 'active' : ''}`;

    return (
        <>
            <nav className={navClassName}>
                <div style={containerStyles}>
                    <div className='nav__logo'>LOGO</div>
                    <div className='nav__menu'>
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

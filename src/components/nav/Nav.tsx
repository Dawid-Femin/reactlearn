import '../../styles/nav/nav.scss'
import '../../styles/helpers/container.scss'

const containerStyles = {
    maxWidth: '1280px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto',
    height: '100%',
};

function Nav() {
    return (
        <>
            <nav className='nav'>
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
}

export default Nav
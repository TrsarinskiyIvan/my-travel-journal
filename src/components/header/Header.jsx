import './header.css';

function Header() {
    return (
        <header className="header">
            <img className="header-logo" src="./logo.png" alt="my travel journal" />
            <h1 className="header-title">My travel journal</h1>
        </header>
    );
}

export default Header;
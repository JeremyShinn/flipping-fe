import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <header>
            <nav className="App-nav">
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/order">Online Orders</Link>
            </p>
            <p>
                <Link to="/register">Register</Link>
            </p>
        </nav>
        </header>
    );
}

export default Navigation;
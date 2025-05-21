import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <header>
            <nav className="App-nav">
                <p>
                    <Link to="/">Inventory</Link>
                </p>
                <p>
                    <Link to="/finances">Finances</Link>
                </p>
                
            </nav>
        </header>
    );
}

export default Navigation;
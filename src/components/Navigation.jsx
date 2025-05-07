import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <nav className="App-nav">
                <div>
                <Link to="/">Home</Link>
                </div>
                <Link to="/add-exercise">New Workout</Link>
            </nav>
        </>
    );
}

export default Navigation;
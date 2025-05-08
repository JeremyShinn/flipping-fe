import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ItemPage from './pages/ItemPage.jsx';
import InventoryPage from './pages/InventoryPage';
import FinancePage from './pages/FinancePage';
import inventory from './data/inventory.js';

function App() {
  
  
  return (
    <div>
    <Router>
      <Navigation />
        <Routes>
          <Route path="/" element={<InventoryPage inventory={inventory}/>}></Route>
          <Route path="/item" element={<ItemPage/>}></Route>
          <Route path="/finances" element={<FinancePage/>}></Route>
        </Routes>
    </Router>
    </div>
  )
}

export default App;
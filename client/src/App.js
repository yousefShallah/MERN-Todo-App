import './App.css';
import ListItems from './components/list';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetails from './components/itemDetails';
import CreateItem from './components/createItem';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ListItems />} />
          <Route path="/:itemId" element={<ListItems />} />
          <Route path="/item-details/:itemId" element={<ItemDetails />} />
          <Route path="/create-item" element={<CreateItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

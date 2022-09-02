import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer/>
    </div>
  );
}

export default App;

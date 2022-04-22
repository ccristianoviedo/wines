import './App.css';
import ItemListContainer from './Components/Landing/itemListContainer';
import NavBar from './Components/NavBar';
import NombreTienda from './Components/NombreTienda';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NombreTienda />
        <NavBar/>
        <div className='itemsLanding'>
          <ItemListContainer />
        </div>
      </header>
    </div>
  );
}
export default App;
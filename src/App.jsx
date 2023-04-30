
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <h1 className='novedades' >Novedades</h1>
//Cuando llegue el momento, aquí pondré los libros recién ingresados
      <ItemListContainer greeting="Adentrate en el mundo de la lectura!" />
    </>
  );
}

export default App;

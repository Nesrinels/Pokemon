import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import PokeDex from "./component/PokeDex";


function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
   
         <div className="App">
           {loading ? <h1>"LOADING"</h1> : <PokeDex pokemonList={pokemonList} />}
         </div>

     
  );
}

export default App;

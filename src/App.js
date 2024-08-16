import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import PokeDex from "./component/PokeDex";
import axios from "axios";
import PokeInfo from './component/PokeInfo';


function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();
  const [pokemonInfo, setPokemonInfo] = useState("");


  const getPokemons = async (res) => {
       const pokemonData = await Promise.all(
         res.map(async (pokemon) => {
           const result = await axios.get(pokemon.url);
           return result.data;
         })
       );
       setPokemonList(pokemonData);
     };

    
  const pokemonFetch = async () => {
       try {
           setLoading(true);
           const res = await axios.get(url);
           setNextUrl(res.data.next);
           setPreviousUrl(res.data.previous);
           getPokemons(res.data.results);
           setLoading(false);
       } catch (error) {
         console.error(error);
         setLoading(false);
       }
  }

  useEffect(() => {
       pokemonFetch();
     }, [url]);


    let closeInfo = () => {
         setPokemonInfo("");
       };
  return (
   
         <div className="App">
           {loading ? <h1>"LOADING"</h1> : <PokeDex pokemonList={pokemonList} />}
      {pokemonInfo ? (
        <PokeInfo
          name={pokemonInfo.name}
          sprite={pokemonInfo.sprites.other["official-artwork"].front_default}
          types={pokemonInfo.types}
          stats={pokemonInfo.stats}
          closeInfo={closeInfo}
        />
      ) : (
        ""
      )}
         </div>

     
  );
}

export default App;

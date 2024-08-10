import PokeCard from './PokeCard';

function PokeDex({pokemonList}) {
    let pokemonGaleryStyle = {
        display:'grid',
        gridTemplateColumns:'repeat(5,1fr)',
        gap:'10px',
        background: 'linear-gradient(to bottom, #f2f2f2, #d9d9d9)',
        opacity:'0.6'
    }
    return (
        <div style={pokemonGaleryStyle}>
            {pokemonList.map((pokemon, index) => (
            <PokeCard pokemon={pokemon} key={index} />
          ))}
        </div>
    );
}

export default PokeDex;
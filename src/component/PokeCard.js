
function PokeCard({pokemon}) {
       let pokeCardStyle={
           display:'flex',
           alignItems:'center',
           justifyContent:'center',
           flexDirection:'column',
           padding:'10px',
           cursor:'pointer',
           backgroundColor:'#f2f2f2',
       }
       return (
           <div style={pokeCardStyle} className='poke-card'>
               <div className='poke-card-image'>
                   <img src={pokemon.sprites.front_default} alt={pokemon.name} />
               </div>
               <div className='poke-card-name'>
                   {pokemon.name}
               </div>
           </div>
       );
   }
   
   export default PokeCard;
   

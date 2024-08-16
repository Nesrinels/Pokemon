function PokeInfo({name,sprite,types,stats,closeInfo}) {
       const classStyle ='typeBox'
   
       return (
           <>
           <span className="name">{name}</span>
           <div className="pokemon-info">
               <div className="pokemon-main-info">
                  <span> Types </span>
                {types.map(({type},index)=>(
                    <span className={classStyle + ' ' + type.name}
                     key={index}>{type.name}</span>
))}

<div className="stats">
                    {stats.map(({base_stat,stat},index)=>(
                  <span className={stat.name + " stat-box"}           
                  key={index}>{stat.name} : {base_stat}</span>
                    ))}
                </div>
               </div>
                  
             </div>
               <div className="pokemon-sprite">
                   <img src={sprite} alt={name} />
               </div>

   
    <button onClick={()=>{closeInfo()}} 
              className="button-close">CLOSE</button>
           </>
       );
   }
   export default PokeInfo;
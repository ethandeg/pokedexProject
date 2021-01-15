
import PokeCard from "./Pokecard"
import "./Pokedex.css"
const Pokedex = (props) => {
    return (
        <>
        
        <h1 id="pokedex-header">Pokedex</h1>
            <div className="pokedex">
                {props.pokemon.map(p => (
                    <PokeCard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>
                ))}
            </div>
        </>
    )
}

export default Pokedex
import pokemon from "./pokemon"
import "./Pokecard.css"
const PokeCard = (props) => {
    return (
        <>
        <div className="pokemon">
            <div className="pokemon-title">
                <h3>{props.name}</h3>
            </div>
            <div className="pokemon-image">
                <img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt = {props.name}></img>
            </div>
            <div className ="pokemon-footer">
                <p>Type: {props.type}</p>
                <p>EXP: {props.base_experience}</p>
            </div>
        </div>
        </>
    )
}

export default PokeCard
import { Component } from "react";
import './card-list.styles.css';
import './card.styles.css';

class CardList extends Component{
    render(){
        const { names } = this.props;
        return (
            <div className='card-list'>
                {names.map((names)=>{
                    const {name,email,id} = names;
                    return(
                        <div className="card-container">
                            <img alt={`names ${name}`}
                            src={`https://robohash.org/${id}?set=set2size=180x180`}
                            />
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
    
}
export default CardList;
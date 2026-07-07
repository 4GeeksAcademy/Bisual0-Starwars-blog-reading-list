import React, { useEffect } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { Link } from "react-router-dom";

const CharacterCard = ({ personaje, index }) => {
    const API_KEY = "https://www.swapi.tech/api/people"
    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="card bg-dark text-white border-secondary" style={{ width: "18rem" }}>
            <img
                src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${personaje.uid}.jpg`}
                className="card-img-top"
                alt={personaje.name}
                style={{}}
            />

            <div className="card-body">
                <h5 className="card-title">{personaje.name}</h5>

                <div className="d-flex justify-content-between align-items-center">
                    <Link
                        to={`/characters/${personaje.uid}`}
                        className="btn btn-outline-warning"
                        onClick={()=>{
                            dispatch({
                                type: "add_characters",
                                payload: personaje
                            })
                        }}
                    >
                        Ver más...
                    </Link>

                    <button className="btn btn-outline-warning">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard
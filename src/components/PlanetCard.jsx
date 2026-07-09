import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

const PlanetCard = ({ planeta }) => {
    const { store, dispatch } = useGlobalReducer()

    const estaEnFavoritos = store.favoritos.includes(planeta.name)

    return (
        <div className="card bg-dark text-white border-secondary" style={{ width: "20rem" }}>
            <img
                src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${planeta.uid}.jpg`}
                className="card-img-top rounded"
                alt={planeta.name}
            />

            <div className="card-body">
                <p className="card-title fs-4">{planeta.name}</p>

                <div className="d-flex justify-content-between align-items-center">
                    <Link
                        to={`/planets/${planeta.uid}`}
                        className="btn btn-outline-warning"
                    >
                        Ver más...
                    </Link>

                    <button
                        className={estaEnFavoritos ? "btn btn-warning" : "btn btn-outline-warning"}
                        onClick={() => {
                            dispatch({
                                type: "toggle_favorite",
                                payload: planeta.name
                            })
                        }}
                    >
                        <i className={estaEnFavoritos ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlanetCard
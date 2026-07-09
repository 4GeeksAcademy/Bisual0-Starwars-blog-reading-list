import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

const VehicleCard = ({ vehiculo }) => {
    const { store, dispatch } = useGlobalReducer()

    const estaEnFavoritos = store.favoritos.includes(vehiculo.name)

    return (
        <div className="card bg-dark text-white border-secondary" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column justify-content-between" style={{ minHeight: "180px" }}>
                <h3 className="card-title text-warning">
                    {vehiculo.name}
                </h3>

                <div className="d-flex justify-content-between align-items-center mt-4">
                    <Link
                        to={`/vehicles/${vehiculo.uid}`}
                        className="btn btn-outline-warning"
                    >
                        Ver más...
                    </Link>

                    <button
                        className={estaEnFavoritos ? "btn btn-warning" : "btn btn-outline-warning"}
                        onClick={() => {
                            dispatch({
                                type: "toggle_favorite",
                                payload: vehiculo.name
                            });
                        }}
                    >
                        <i className={estaEnFavoritos ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VehicleCard;
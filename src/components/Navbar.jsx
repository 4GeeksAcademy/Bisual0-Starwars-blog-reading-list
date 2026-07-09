import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState } from "react";


const Navbar = () => {
    const { store, dispatch } = useGlobalReducer()
    const [hoverFavorito, setHoverFavorito] = useState(null)

    return (
        <nav className="navbar navbar-dark bg-black px-4 border-bottom border-secondary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
                        alt="Star Wars Logo"
                        width="120"
                    />
                </Link>

                <div className="dropdown">
                    <button
                        className="btn btn-warning dropdown-toggle fw-semibold"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Favoritos
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end" style={{ maxWidth: "220px" }}>
                        {store.favoritos.length === 0 ? (
                            <li>
                                <p className="dropdown-item text-muted">
                                    Sin favoritos
                                </p>
                            </li>
                        ) : (
                            store.favoritos.map((favorito, index) => (
                                <li key={index}>
                                    <div className="d-flex justify-content-between align-items-center gap-3 ms-2">
                                        <p className="text-nowrap flex-grow-1">{favorito}</p>

                                        <button
                                            className={
                                                hoverFavorito === favorito
                                                    ? "btn border-0 me-2 p-0 text-danger d-flex mb-3"
                                                    : "btn border-0 me-2 p-0 text-secondary d-flex mb-3"
                                            }
                                            onMouseEnter={() => setHoverFavorito(favorito)}
                                            onMouseLeave={() => setHoverFavorito(null)}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                dispatch({
                                                    type: "toggle_favorite",
                                                    payload: favorito
                                                });
                                            }}
                                        >
                                            <i
                                                className={
                                                    hoverFavorito === favorito
                                                        ? "fa-solid fa-trash"
                                                        : "fa-regular fa-trash-can"
                                                }
                                            ></i>
                                        </button>
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
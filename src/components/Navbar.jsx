import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-black px-4 border-bottom border-secondary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
                        alt="Star Wars Logo"
                        width="120"
                    />
                </a>

                <div className="dropdown">
                    <button
                        className="btn btn-warning dropdown-toggle fw-semibold"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Favoritos
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                            <span className="dropdown-item text-muted">
                                Sin favoritos
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";

const CharacterPage = () => {
  const API_KEY = "https://www.swapi.tech/api/people"
  const { id } = useParams()

  const [character, setCharacter] = useState({})
  const [planet, setPlanet] = useState("")
  const [vehicles, setVehicles] = useState([])
  const [starships, setStarships] = useState([])
  const [films, setFilms] = useState([])

  const getCharacterInfo = async () => {
    try {
      const resp = await fetch(`${API_KEY}/${id}`);
      const data = await resp.json();

      const characterData = data.result.properties;
      setCharacter(characterData);

      const planetPromise = fetch(characterData.homeworld).then(resp => resp.json());

      const vehiclesPromise = Promise.all(
        characterData.vehicles.map(url =>
          fetch(url).then(resp => resp.json())
        )
      )

      const starshipsPromise = Promise.all(
        characterData.starships.map(url =>
          fetch(url).then(resp => resp.json())
        )
      )

      const filmsPromise = Promise.all(
        characterData.films.map(url =>
          fetch(url).then(resp => resp.json())
        )
      )

      const [planetData, vehiclesData, starshipsData, filmsData] = await Promise.all([
        planetPromise,
        vehiclesPromise,
        starshipsPromise,
        filmsPromise
      ])

      setPlanet(planetData.result.properties.name);

      setVehicles(
        vehiclesData.map(item => item.result.properties)
      )

      setStarships(
        starshipsData.map(item => item.result.properties)
      )

      setFilms(
        filmsData.map(item => item.result.properties)
      )

    } catch (error) {
      console.log("getCharacter error", error)
    }
  }

  useEffect(() => {
    getCharacterInfo()
  }, [id])

  if (!character) {
    return <p className="text-white">Cargando...</p>;
  }

  return (
    <main className="bg-black text-white min-vh-100 py-5">
      <div className="container">

        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-warning mb-4 fs-1">
              {character.name}
            </p>

            <div className="row">
              <div className="col-sm-6">
                <p>
                  <strong>Gender:</strong> {character.gender}
                </p>
                <p>
                  <strong>Skin color:</strong> {character.skin_color}
                </p>
                <p>
                  <strong>Hair color:</strong> {character.hair_color}
                </p>
                <p>
                  <strong>Height:</strong> {character.height} cm
                </p>
              </div>

              <div className="col-sm-6">
                <p>
                  <strong>Eye color:</strong> {character.eye_color}
                </p>
                <p>
                  <strong>Mass:</strong> {character.mass} kg
                </p>
                <p>
                  <strong>Birth year:</strong> {character.birth_year}
                </p>
                <p>
                  <strong>Homeworld:</strong> {planet}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${id}.jpg`}
              alt={character.name}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px" }}
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">

            <div className="mb-4">
              <h4 className="text-warning">Films:</h4>

              <div className="d-flex flex-wrap gap-2">
                {films.length > 0 ? (
                  films.map((film, index) => (
                    <span key={index}>
                      {film.title}
                      {index < films.length - 1 && " - "}
                    </span>
                  ))
                ) : (
                  <span className="text-secondary">No films available</span>
                )}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-warning">Starships:</h4>

              <div className="d-flex flex-wrap gap-2">
                {starships.length > 0 ? (
                  starships.map((starship, index) => (
                    <span key={index}>
                      {starship.name}
                      {index < starships.length - 1 && " - "}
                    </span>
                  ))
                ) : (
                  <span className="text-secondary">No starships available</span>
                )}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-warning">Vehicles:</h4>

              <div className="d-flex flex-wrap gap-2">
                {vehicles.length > 0 ? (
                  vehicles.map((vehicle, index) => (
                    <span key={index}>
                      {vehicle.name}
                      {index < vehicles.length - 1 && " - "}
                    </span>
                  ))
                ) : (
                  <span className="text-secondary">No vehicles available</span>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}

export default CharacterPage
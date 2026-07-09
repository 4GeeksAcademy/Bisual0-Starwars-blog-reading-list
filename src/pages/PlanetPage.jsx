import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlanetPage = () => {
  const API_KEY = "https://www.swapi.tech/api/planets";
  const { id } = useParams();

  const [planet, setPlanet] = useState(null);

  const getPlanetInfo = async () => {
    try {
      const resp = await fetch(`${API_KEY}/${id}`);

      if (resp.ok) {
        const data = await resp.json();
        setPlanet(data.result.properties);
      }
    } catch (error) {
      console.log("getPlanetInfo error", error);
    }
  };

  useEffect(() => {
    getPlanetInfo();
  }, [id]);

  if (!planet) {
    return (
      <main className="bg-black text-white min-vh-100 py-5">
        <div className="container">
          <p>Cargando planeta...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-black text-white min-vh-100 py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <p className="text-warning mb-4 display-5 fw-bold">
              {planet.name}
            </p>

            <div className="row">
              <div className="col-sm-6 fs-4">
                <p>
                  <strong >Climate:</strong> {planet.climate}
                </p>
                <p>
                  <strong>Surface water:</strong> {planet.surface_water}
                </p>
                <p>
                  <strong>Diameter:</strong> {planet.diameter}
                </p>
                <p>
                  <strong>Rotation period:</strong> {planet.rotation_period}
                </p>
              </div>

              <div className="col-sm-6 fs-4">
                <p>
                  <strong>Terrain:</strong> {planet.terrain}
                </p>
                <p>
                  <strong>Gravity:</strong> {planet.gravity}
                </p>
                <p>
                  <strong>Orbital period:</strong> {planet.orbital_period}
                </p>
                <p>
                  <strong>Population:</strong> {planet.population}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${id}.jpg`}
              alt={planet.name}
              className="img-fluid shadow border"
              style={{ maxHeight: "500px" }}
            />
          </div>

        </div>
      </div>
    </main>
  );
};

export default PlanetPage;
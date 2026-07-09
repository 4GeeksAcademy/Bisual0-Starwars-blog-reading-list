import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VehiclePage = () => {
  const API_KEY = "https://www.swapi.tech/api/vehicles"
  const { id } = useParams()

  const [vehicle, setVehicle] = useState(null)

  const getVehicleInfo = async () => {
    try {
      const resp = await fetch(`${API_KEY}/${id}`)

      if (resp.ok) {
        const data = await resp.json()
        setVehicle(data.result.properties)
      }
    } catch (error) {
      console.log("getVehicleInfo error", error)
    }
  };

  useEffect(() => {
    getVehicleInfo()
  }, [id])

  if (!vehicle) {
    return (
      <main className="bg-black text-white min-vh-100 py-5">
        <div className="container">
          <p>Cargando vehículo...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-vh-100 py-5">
      <div className="container">

        <p className="text-warning mb-5 display-4 fw-bold">
          {vehicle.name}
        </p>

        <div className="row fs-4">
          <div className="col-md-6">
            <p>
              <strong>Model:</strong> {vehicle.model}
            </p>
            <p>
              <strong>Manufacturer:</strong> {vehicle.manufacturer}
            </p>
            <p>
              <strong>Vehicle class:</strong> {vehicle.vehicle_class}
            </p>
            <p>
              <strong>Cost in credits:</strong> {vehicle.cost_in_credits}
            </p>
            <p>
              <strong>Length:</strong> {vehicle.length}
            </p>
            <p>
              <strong>Crew:</strong> {vehicle.crew}
            </p>
          </div>

          <div className="col-md-6">
            <p>
              <strong>Passengers:</strong> {vehicle.passengers}
            </p>
            <p>
              <strong>Cargo capacity:</strong> {vehicle.cargo_capacity}
            </p>
            <p>
              <strong>Consumables:</strong> {vehicle.consumables}
            </p>
            <p>
              <strong>Max atmosphering speed:</strong> {vehicle.max_atmosphering_speed}
            </p>
            <p>
              <strong>Pilots:</strong>{" "}
              {vehicle.pilots.length > 0 ? vehicle.pilots.length : "No pilots available"}
            </p>
          </div>
        </div>

      </div>
    </main>
  )
}

export default VehiclePage
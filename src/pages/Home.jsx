import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React from "react";
import CharacterCard from "../components/CharacterCard.jsx";
import { useEffect } from "react";
import PlanetCard from "../components/PlanetCard.jsx";
import VehicleCard from "../components/VehicleCard.jsx";

const Home = () => {
	const { store, dispatch } = useGlobalReducer()
	const API_KEY = "https://www.swapi.tech/api"

	const getCharacters = async () => {
		try {
			const resp = await fetch(`${API_KEY}/people`, {
				method: "GET"
			})
			if (resp.ok) {
				const data = await resp.json()
				const personajes = data.results
				dispatch({
					type: "add_characters",
					payload: personajes
				})
			}
		} catch (error) {
			console.log("getCharacters error", error)
		}
	}
	const getPlanets = async () => {
		try {
			const resp = await fetch(`${API_KEY}/planets`, {
				method: "GET"
			})

			if (resp.ok) {
				const data = await resp.json()
				const planetas = data.results

				dispatch({
					type: "add_planetas",
					payload: planetas
				})
			}
		} catch (error) {
			console.log("getPlanets error", error)
		}
	}
	const getVehicles = async () => {
		try {
			const resp = await fetch(`${API_KEY}/vehicles`, {
				method: "GET"
			});

			if (resp.ok) {
				const data = await resp.json()
				const vehiculos = data.results

				dispatch({
					type: "add_vehiculos",
					payload: vehiculos
				})
			}
		} catch (error) {
			console.log("getVehicles error", error)
		}
	}
	useEffect(() => {
		getCharacters()
		getPlanets()
		getVehicles()
	}, [])

	return (
		<div className="bg-black text-white min-vh-100">
			<main className="pt-5 pb-5">
				<div id="character" className="container mb-4">
					<p className="fs-1 text-warning">Personajes</p>
					<div className="row overflow-x-auto flex-nowrap g-0">
						{store.personajes.map((personaje, index) => {
							return <CharacterCard key={personaje.uid} personaje={personaje} index={index} />
						})}
					</div>
				</div>
				<div id="planetas" className="container mt-5">
					<p className="fs-1 text-warning">Planetas</p>

					<div className="row overflow-x-auto flex-nowrap g-0">
						{store.planetas.map((planeta) => (
							<div className="col-auto" key={planeta.uid}>
								<PlanetCard planeta={planeta} />
							</div>
						))}
					</div>
				</div>
				<div id="vehiculos" className="container mt-5 mb-4">
					<p className="fs-1 text-warning">Vehículos</p>

					<div className="row overflow-x-auto flex-nowrap g-0">
						{store.vehiculos.map((vehiculo) => (
							<div className="col-auto" key={vehiculo.uid}>
								<VehicleCard vehiculo={vehiculo} />
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	)
}

export default Home
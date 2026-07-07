import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React from "react";
import CharacterCard from "../components/CharacterCard.jsx";
import { useEffect } from "react";

const Home = () => {
	const { store, dispatch } = useGlobalReducer()
	const API_KEY = "https://www.swapi.tech/api/people"
	const getCharacters = async () => {
		try {
			const resp = await fetch(`${API_KEY}`, {
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

	useEffect(() => {
		getCharacters()
	}, [])

	return (
		<div className="bg-black text-white min-vh-100">

			<main className="">
				<div id="character" className="container">
					<p>Personajes</p>
					<div className="row overflow-x-auto flex-nowrap">
						{store.personajes.map((personaje, index) => {
							return <CharacterCard key={personaje.uid} personaje={personaje} index={index} />
						})}
					</div>
				</div>
				<div id="planetas">
					<p>Planetas</p>
				</div>
				<div id="vehicles">
					<p>Vehiculos</p>
				</div>
			</main>
		</div>
	)
}

export default Home
import { useState, useEffect } from "react";
import H2 from "../../shared/Heading/H2.jsx";
import Select from "./Select.jsx";
import { useCases } from "../../../application/useCases/instances.js";

const aspectsMock = [
	{
		"id": 1,
		"type": "aggression",
		"name": "Agresividad",
		"color": "#940D14",
	},
	{
		"id": 2,
		"type": "justice",
		"name": "Justicia",
		"color": "#EBB408",
	},
	{
		"id": 3,
		"type": "protection",
		"name": "Protección",
		"color": "#4DA01B",
	},
	{
		"id": 4,
		"type": "leadership",
		"name": "Liderazgo",
		"color": "#239C90",
	},
	{
		"id": 5,
		"type": "basic",
		"name": "Básico",
		"color": "#7A8C88",
	},
]

const Step1 = ({ setGameData, gameData }) => {
	
	const [heroes, setHeroes] = useState([]);
	
	const defaultHero = heroes[0];
	const defaultAspect = aspectsMock[0];

	const heroOption = gameData.hero || defaultHero;
	const aspectOption = gameData.aspect || defaultAspect;

	const handleHeroChange = (selectedOption) => {
		const selectedHero = heroes.find(hero => hero === selectedOption);
		setGameData({hero: selectedHero });
	}  

	const handleAspectChange = (selectedOption) => {
		const selectedAspect = aspectsMock.find(aspect => aspect === selectedOption);
		setGameData({aspect: selectedAspect});
	}

	useEffect(() => {
		useCases.searchHeroes().then(({ data: heroes }) => setHeroes(heroes))
	}, []);

	return(
		<div>
			<H2>¿Con qué Heroe has jugado?</H2>
			<Select value={heroOption} label="Héroe" options={heroes} onChange={handleHeroChange} />
			<Select value={aspectOption} label="Aspecto" options={aspectsMock} onChange={handleAspectChange} />
		</div>
	)
}

export default Step1
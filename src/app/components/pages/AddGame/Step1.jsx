import H2 from "../../shared/Heading/H2.jsx";
import Select from "./Select.jsx";

const heroesMock = [
	{
		"id": 1,
		"pack_code": "MC01",
		"name": "Spiderman",
		"thumb": ""
	},
	{
		"id": 2,
		"pack_code": "MC01",
		"name": "Capitana Marvel",
		"thumb": ""
	},
	{
		"id": 3,
		"pack_code": "MC01",
		"name": "Hulka",
		"thumb": ""
	}
]

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

	const heroSpidermanOption = heroesMock[0];
	const aspectAggressionOption = aspectsMock[0];

	const handleHeroChange = (selectedOption) => {
		setGameData({hero: selectedOption });
	}  

	const handleAspectChange = (selectedOption) => {
		setGameData({aspect: selectedOption});
	}

	return(
		<div>
			<H2>¿Con qué Heroe has jugado?</H2>
			<Select value={gameData.hero} defaultOption={heroSpidermanOption} label="Héroe" options={heroesMock} onChange={handleHeroChange} />
			<Select value={gameData.aspect} defaultOption={aspectAggressionOption} label="Aspecto" options={aspectsMock} onChange={handleAspectChange} />
		</div>
	)
}

export default Step1
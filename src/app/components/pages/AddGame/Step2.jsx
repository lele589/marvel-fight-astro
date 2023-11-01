import H2 from "../../shared/Heading/H2.jsx";
import Select from "./Select.jsx";

const villainsMock = [
	{
		"id": 1,
		"pack_code": "MC01",
		"name": "Rino",
		"thumb": ""
	},
	{
		"id": 2,
		"pack_code": "MC01",
		"name": "Klaw",
		"thumb": ""
	},
	{
		"id": 3,
		"pack_code": "MC01",
		"name": "Ultron",
		"thumb": ""
	}
]

const encountersMock = [
	{
		"pack_code": "MC01",
		"name": "Amenaza de Bomba",
		"difficulty": 1,
	},
	{
		"pack_code": "MC01",
		"name": "Señores del Mal",
		"difficulty": 2,
	}
]

const gameModesMock = [
	{
		"pack_code": "MC01",
		"type": "normal",
		"name": "Normal",
		"order": 1,
	},
	{
		"pack_code": "MC01",
		"type": "normal",
		"name": "Normal II",
		"order": 2,
	},
	{
		"pack_code": "MC24",
		"type": "expert",
		"name": "Experto",
		"order": 3,
	},
	{
		"pack_code": "MC24",
		"type": "expert",
		"name": "Experto II",
		"order": 4,
	},
]

const Step2 = ({ setGameData }) => {

	const handleVillainChange = (selectedOption) => {
		setGameData({villain: selectedOption});
	}  

	const handleEncounterChange = (selectedOption) => {
		setGameData({encounter: selectedOption});
	}

	const handleGameModeChange = (selectedOption) => {
		setGameData({gameMode: selectedOption});
	}


	return(
		<div>
			<H2>¿Con qué Villano has jugado?</H2>
			<Select defaultOption="Selecciona un villano..." label="Villano" options={villainsMock} onChange={handleVillainChange} />
			<Select defaultOption="Selecciona un encuentro..." label="Conjunto de encuentro" options={encountersMock} onChange={handleEncounterChange} />
			<Select defaultOption="Selecciona dificultad..." label="Dificultad" options={gameModesMock} onChange={handleGameModeChange} />
		</div>
	)
}

export default Step2
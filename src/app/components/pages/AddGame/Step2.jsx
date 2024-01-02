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

const Step2 = ({ setGameData, gameData }) => {

	const defaultVillain = villainsMock[0];
	const defaultEncounter = encountersMock[0];
	const defaultGameMode = gameModesMock[0];

	const villainOption = gameData.villain || defaultVillain;
	const encounterOption = gameData.encounter || defaultEncounter;
	const gameModeOption = gameData.gameMode || defaultGameMode;

	const handleVillainChange = (selectedOption) => {
		const selectedVillain = villainsMock.find(villain => villain === selectedOption);
		setGameData({villain: selectedVillain});
	}  

	const handleEncounterChange = (selectedOption) => {
		const selectedEncounter = encountersMock.find(encounter => encounter === selectedOption);
		setGameData({encounter: selectedEncounter});
	}

	const handleGameModeChange = (selectedOption) => {
		const selectedGameMode = gameModesMock.find(gameMode => gameMode === selectedOption);
		setGameData({gameMode: selectedGameMode});
	}


	return(
		<div>
			<H2>¿Con qué Villano has jugado?</H2>
			<Select value={villainOption} label="Villano" options={villainsMock} onChange={handleVillainChange} />
			<Select value={encounterOption} label="Conjunto de encuentro" options={encountersMock} onChange={handleEncounterChange} />
			<Select value={gameModeOption} label="Dificultad" options={gameModesMock} onChange={handleGameModeChange} />
		</div>
	)
}

export default Step2
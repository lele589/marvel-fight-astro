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

const Step2 = () => {
	return(
		<div>
			<H2>¿Con qué Villano has jugado?</H2>
			<Select label="Selecciona un villano:" options={villainsMock} />
			<Select label="Selecciona un conjunto de encuentro:" options={encountersMock} />
			<Select label="Selecciona la dificultad:" options={gameModesMock} />
		</div>
	)
}

export default Step2
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
		"name": "agresividad",
		"color": "#940D14",
	},
	{
		"id": 2,
		"type": "justice",
		"name": "justicia",
		"color": "#EBB408",
	},
	{
		"id": 3,
		"type": "protection",
		"name": "protección",
		"color": "#4DA01B",
	},
	{
		"id": 4,
		"type": "leadership",
		"name": "liderazgo",
		"color": "#239C90",
	},
	{
		"id": 5,
		"type": "basic",
		"name": "básico",
		"color": "#7A8C88",
	},
]

const Step1 = () => {
	return(
		<div>
			<H2>¿Con qué Heroe has jugado?</H2>
			<Select label="Selecciona un héroe:" options={heroesMock} />
			<Select label="Selecciona un aspecto:" options={aspectsMock} />
		</div>
	)
}

export default Step1
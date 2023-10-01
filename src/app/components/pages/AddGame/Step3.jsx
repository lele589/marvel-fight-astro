import H2 from "../../shared/Heading/H2.jsx";
import Datepicker from "./Datepicker.jsx";
import Input from "./Input.jsx";
import Select from "./Select.jsx";

const packsMock = [
	{
		"id": 1,
		"code": "MC01",
		"type": "Los guardianes de la galaxia",
		"name": ""
	},
	{
		"id": 2,
		"pack_code": "MC01",
		"name": "Cráneo Rojo",
		"thumb": ""
	},
	{
		"id": 3,
		"pack_code": "MC01",
		"name": "La mano de Thanos",
		"thumb": ""
	}
]

const Step3 = () => {
	return(
		<div>
			<H2>Otros datos de la partida</H2>
			<Datepicker />
			<Select label="Partida de campaña:" options={packsMock} defaultOption="No" />
			<Input label="Url del mazo (MarvelCDB):" placeholder="https://marvelcdb.com/decklist/view/32123/..." />
		</div>
	)
}

export default Step3
import H2 from "../../shared/Heading/H2.jsx";
import Datepicker from "./Datepicker.jsx";
import Input from "./Input.jsx";
import Select from "./Select.jsx";

const winnerOptions = [
	{
		"id": 1,
		"name": "Si"
	},
	{
		"id": 2,
		"name": "No"
	},
]

const Step3 = ({ setGameData }) => {

	const handleDateChange = (selectedOption) => {
		setGameData({date: selectedOption});
	}

	const handleWinnerChange = (selectedOption) => {
		const isWin = selectedOption === 'Si' ? true : false;
		setGameData({isWin: isWin});
	}

	const handleDeckUrlChange = (selectedOption) => {
		setGameData({deckUrl: selectedOption});
	}

	return(
		<div>
			<H2>Otros datos de la partida</H2>
			<Datepicker defaultOption="Cuándo jugaste..." label="Fecha:" />
			<Select defaultOption="Selecciona..." label="¿Has ganado?" options={winnerOptions} onChange={handleWinnerChange} />
			<Input label="Url (MarvelCDB):" placeholder="https://marvelcdb.com/decklist/view/32123/..." onChange={handleDeckUrlChange} />
		</div>
	)
}

export default Step3
import H2 from "../../shared/Heading/H2.jsx";
import DateInput from "./DateInput.jsx";
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

const Step3 = ({ setGameData, gameData }) => {
	const defaultDate = new Date();
	const defaultIsWin = winnerOptions[0];

	const dateOption = gameData.date || defaultDate
	const winnerOption = gameData.isWin || defaultIsWin

	const handleDateChange = (selectedOption) => {
		setGameData({date: selectedOption});
	}

	const handleWinnerChange = (selectedOption) => {
		const selectedIsWin = winnerOptions.find(option => option === selectedOption);
		setGameData({isWin: selectedIsWin});
	}

	const handleDeckUrlChange = (selectedOption) => {
		setGameData({deckUrl: selectedOption});
	}


	return(
		<div>
			<H2>Otros datos de la partida</H2>
			<DateInput value={dateOption} label="Fecha:" onChange={handleDateChange} />
			<Select value={winnerOption} label="¿Has ganado?" options={winnerOptions} onChange={handleWinnerChange} />
			<Input value={gameData.deckUrl} label="Url (MarvelCDB):" placeholder="https://marvelcdb.com/decklist/view/32123/..." onChange={handleDeckUrlChange} />
		</div>
	)
}

export default Step3
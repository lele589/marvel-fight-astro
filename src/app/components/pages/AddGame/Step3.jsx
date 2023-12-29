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
	const isWinnerOption = winnerOptions[0]

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
			<DateInput value={gameData.date} label="Fecha:" onChange={handleDateChange} />
			<Select value={gameData.isWin} defaultOption={isWinnerOption} label="¿Has ganado?" options={winnerOptions} onChange={handleWinnerChange} />
			<Input value={gameData.deckUrl} label="Url (MarvelCDB):" placeholder="https://marvelcdb.com/decklist/view/32123/..." onChange={handleDeckUrlChange} />
		</div>
	)
}

export default Step3
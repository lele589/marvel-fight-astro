import { useState, useEffect } from "react"
import Datepicker from "tailwind-datepicker-react"

const datepickerOptions = {
	autoHide: true,
	todayBtn: false,
	clearBtn: false,
	maxDate: new Date(),
	minDate: new Date("2023-06-01"),
	icons: {
		prev: () => <span>{'<'}</span>,
		next: () => <span>{'>'}</span>,
	},
	datepickerClassNames: "top-12",
	language: "es",
	weekDays: ["L", "M", "X", "J", "V", "S", "D"],
	inputNameProp: "date",
	inputIdProp: "date",
	inputDateFormatProp: {
		day: "numeric",
		month: "long",
		year: "numeric"
	}
}

const DateInput = ({ label, onChange, value }) => {
	const [selectedDate, setSelectedDate] = useState(value || new Date());
  	const [show, setShow] = useState(false)

	const handleDatepickerClose = (isCalendarShown) => {
		setShow(isCalendarShown)
	}

	const handleDatepickerChange = (selectedDate) => {
		setSelectedDate(selectedDate);
		onChange(selectedDate);
	};

	useEffect(() => {
        onChange(selectedDate);
    }, []);  

	return(
		<div className="my-4">
			<label className="label">
			<span className="label-text">{label}</span>
			</label>
			<Datepicker value={selectedDate} options={datepickerOptions} onChange={handleDatepickerChange} show={show} setShow={handleDatepickerClose} />
		</div>
	)
}

export default DateInput
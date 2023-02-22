import './style.sass'
import './responsive.sass'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export function Calender(props){

  const { selectedRange, onSelectedData } = props;

  const handleDateChange = (range) => {
    onSelectedData(range)

  }

  return(

        <Calendar
          onChange={handleDateChange}
          value={selectedRange}
          selectRange={true}
        />
  )
}

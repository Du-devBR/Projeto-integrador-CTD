import './style.sass'
import './responsive.sass'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function Calender(props){

  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
  const { selectedRange, onSelectedData, onDisbaledDate} = props;

  function isDateBlocked(date, onDisbaledDate) {
    for (let i = 0; i < onDisbaledDate.length; i++) {
      const { start, end } = onDisbaledDate[i];
      if (date >= start && date <= end) {
        return true;
      }
    }
    return false;
  }

  console.log(onDisbaledDate)

  const minDate = new Date()

  function handleDateChange(value) {

      onSelectedData(value)

  }
  return(
    <div className='container-calendar'>
      <Calendar
        selectRange={true}
        value={selectedRange}
        onChange={handleDateChange}
        showDoubleView={isMobile ? false : true}
        minDate= {minDate}
        tileDisabled={({ date }) => isDateBlocked(date, onDisbaledDate)}
        events={onDisbaledDate}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        defaultView="month"

      />

    </div>
  )
}

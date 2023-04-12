import './style.sass'
import './responsive.sass'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function CalenderHome(props){

  const isMobile = useMediaQuery({ query: '(max-width: 501px)' })
  const { selectedRange, onSelectedData} = props;
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
      />

    </div>
  )
}

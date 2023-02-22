import './style.sass'
import './responsive.sass'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import { Calender } from '../../components/Calender';

export function Home(){

  const [startDate, setStartDate] = useState([null, null])
  const [selectDate, setSelectDate] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)


// dados apenas para teste de no input location, será substituido pelo dados vindo da api
  const locations = [
    {
      city: 'sao paulo',
      country:'brazil'
    },
    {
      city: 'new york',
      country:'USA'
    },
    {
      city: 'Denver',
      country:'USA'
    },
    {
      city: 'Rio de Janeiro',
      country:'brazil'
    },
  ]


  function toggleCalendar(){
    setShowCalendar(!showCalendar)
  }

  const dataSelecionada = (range) => {
    setStartDate(range)
    setSelectDate(true)
    setShowCalendar(false)
  }

  const formatDate = (range) => {
    if (!range) {
      return '';
    }

    const startDay = range[0].toLocaleString('pt-BR', { day: '2-digit' });
    const startMonth = range[0].toLocaleString('pt-BR', { month: 'short' });
    const endDay = range[1].toLocaleString('pt-BR', { day: '2-digit' });
    const endMonth = range[1].toLocaleString('pt-BR', { month: 'short' });

    return `${startDay} de ${startMonth} a ${endDay} de ${endMonth}`;
  };

  return(
    <div className='container-home'>
      <div className="container-search-motor">
        <div className="content-search">
          <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
          <div className="inputs-search">
            {/* ********* verificar react-select para substituir o select e option ************** */}
            <select className='input-select-location' type="text" placeholder='Buenos Aires, Argentina'>
              {
                locations.map((options)=>(
                  <option className='teste' key={options.city}
                    value={options.city}
                      >
                        <div className="travel-location">
                          <span className='option-city'>{options.city}</span>
                          <span className='option-country'>{options.country}</span>
                        </div>
                  </option>
                ))
              }
            </select>
            <div className="input-calendar">
              <input
                onClick={toggleCalendar}
                type="text"
                placeholder='check in - Check out'
                value={selectDate ? formatDate(startDate) : ''}
              />
                <div className={showCalendar ? 'container-calendar-open' : 'container-calendar-close'}>
                  {
                    showCalendar
                      &&
                      <Calender
                        onSelectedData={dataSelecionada}
                        selectedRange={startDate}
                      />
                  }
                </div>
            </div>
            <button className='submit-search'>Pesquisar</button>
          </div>
        </div>
      </div>
      <div className='teste'>

      </div>
    </div>
  )
}

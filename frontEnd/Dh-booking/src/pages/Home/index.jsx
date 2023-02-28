import './style.sass'
import './responsive.sass'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import { Calender } from '../../components/Calender';
import css from '@emotion/styled';
import { SelectLocation } from '../../components/Select';
import { CardCategoria } from '../../components/CardCategoria';

//****** */ imports para teste sem api ******
import {category} from '../../assets/js-mock/category'
import { product } from '../../assets/js-mock/products'
import { CardProduct } from '../../components/CardProduto';


export function Home(){

  const [startDate, setStartDate] = useState([null, null])
  const [selectDate, setSelectDate] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [showDestination, setShowDestination] = useState(false)
  const [destination, setDestination] = useState(null)
  const [searchDestination, setSearchDestination] = useState({})

  // console.log(destination)
  // console.log(startDate)
  console.log(searchDestination)


// ******* dados apenas para teste de no input location, será substituido pelo dados vindo da api
  const locations = [
    {
      city: 'São Paulo',
      country:'Brazil'
    },
    {
      city: 'New York',
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

  // ******** dados que irá ser enviado a api para buscar os hoteis

  const searchDestinationWithData = (event) => {
    event.preventDefault()
    if(destination !== null || '' && startDate !== [null, null]){
      setSearchDestination({
        city: destination.city,
        country: destination.country,
        dataInitial: startDate[0].toISOString(),
        dataFinal: startDate[1].toISOString()
      })
      setSelectDate(false)
    }else{
      console.log('errro')
    }
  }

  function toggleCalendar(){
    setShowCalendar(!showCalendar)
    setShowDestination(false)
  }

  function toogleLocation(){
    setShowDestination(!showDestination)
  }

  const selectDestination = (location) => {
    if(location !== null || ''){
      return `${location.city}, ${location.country}`
    }
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
          <h1>Buscar ofertas em hotéis, pousadas e muito mais.</h1>
          <div className="inputs-search">
            <div className="select-location">
              <input
                className='input-select-location'
                onClick={toogleLocation}
                placeholder='Escolha seu destino'
                value={selectDestination(destination)}
              />
                  <div className={showDestination ? 'container-location-open' : 'container-location-close'}>
                    {
                      showDestination
                      &&
                        locations.map((location, index) =>(
                          <div className="location-list">
                            <SelectLocation
                              id={index}
                              data={location}
                              onSelectDestination={currentDestination => setDestination(currentDestination)}
                            />
                          </div>
                        ))
                    }
                  </div>
            </div>
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
                        id={startDate}
                        onSelectedData={dataSelecionada}
                        selectedRange={startDate}
                      />
                  }
                </div>
            </div>
            <button className='submit-search' onClick={event => searchDestinationWithData(event)}>Pesquisar</button>
          </div>
        </div>
      </div>
      <section className='container-category'>
        <h2>Buscar por tipo de acomodação</h2>
        <div className="list-categories">
          {
            category.map((categories, index) => (
              <CardCategoria
                id={index}
                data={categories}
              />
            ))
          }
        </div>
      </section>
      <section className='container-product'>
        <h2>Lista de produtos</h2>
        <div className="list-products">
          {
            product.map((products, index) => (
              <CardProduct
                id={index}
                data={products}
              />
            ))
          }
        </div>
      </section>
    </div>
  )
}

import './style.sass'
import './responsive.sass'
import { useEffect, useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import { Calender } from '../../components/Calender';
import css from '@emotion/styled';
import { SelectLocation } from '../../components/Select';
import { CardCategoria } from '../../components/CardCategoria';

//****** */ imports para teste sem api ******
// import {category} from '../../assets/js-mock/category'
import { product } from '../../assets/js-mock/products'
import { CardProduct } from '../../components/CardProduto';
import {MapPin, Calendar} from 'phosphor-react'


export function Home(){

  const [startDate, setStartDate] = useState([null, null])
  const [selectDate, setSelectDate] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [showDestination, setShowDestination] = useState(false)

  const [searchDestination, setSearchDestination] = useState('')
  const [category, setCategory] = useState([])
  const [location, setLocation] = useState([])

  const [objectFilter, setObjectFilter] = useState([]);
  const [listProduct, setListProduct] =useState(true)
  const [selectCity, setSelectCity] = useState(false)

  const [selectCategory, setSelectCategory] = useState(false)

  const [inputSelect, setInputSelect] = useState(true)
  const [valueInputSelect, setValueInputSelect] = useState('')

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/categoria')
    .then(res => {
      res.json()
      .then(data => {
        setCategory(data)
      })
    })
  }, [])

  useEffect(() =>{
    if(showDestination){
      fetch('http://localhost:8080/api/cidade')
      .then(res => {
        res.json()
        .then(data => {
          setLocation(data)
        })
      })
    }
  }, [showDestination])

  useEffect(() => {
    fetch('http://localhost:8080/api/produto')
    .then(res => [
      res.json()
      .then(data => [
        setProducts(data)
      ])
    ])
  }, [])

  const getValueInputSelect = (event) => {
    setValueInputSelect(event.target.value)
    if(valueInputSelect.length >= 1 ){
      setInputSelect(false)
    }else{
      setInputSelect(true)
    }
  }

  const teste = (nome) => {
    setValueInputSelect(nome)
    setShowDestination(false)
  }


  const filterInputSelect = location.filter((object) =>
    object.name.toLowerCase().includes(valueInputSelect.toLowerCase()) ||
    object.country.toLowerCase().includes(valueInputSelect.toLowerCase())
  )

  const filterProductBySelect = () => {
    const filterObjects = product.filter((object) => object.cidade.toLowerCase().includes(valueInputSelect.toLowerCase()))
    return filterObjects
  }

  const filterProductByCategory = (currentCategory) => {

    const filterCategory = product.filter((object) => object.category === currentCategory)
    setObjectFilter(filterCategory)
    setListProduct(false)
    setSelectCategory(true)
    setSelectCity(false)

  }

  // const searchDestinationWithData = (event) => {
  //   event.preventDefault()
  //   if(destination !== null || '' && startDate !== [null, null]){
  //     setSearchDestination({
  //       city: destination.city,
  //       country: destination.country,
  //       dataInitial: startDate[0].toISOString(),
  //       dataFinal: startDate[1].toISOString()
  //     })
  //     setSelectDate(false)
  //   }else{
  //     console.log('errro')
  //   }
  // }

  const searchDestinationSelect = (event) => {
    event.preventDefault()
    if(valueInputSelect !== null){
      setSearchDestination(
        valueInputSelect
      )
      const objFilter = filterProductBySelect()
      setObjectFilter(objFilter)
      setListProduct(false)
      setValueInputSelect('')
      setSelectCity(true)
      setSelectCategory(false)

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
  }

  return(
    <div className='container-home'>
      <div className="container-search-motor">
        <div className="content-search">
          <h1>Buscar ofertas em hotéis, pousadas e muito mais.</h1>
          <div className="inputs-search">
            <div className="select-location">
              <div className="input">
                <input
                  className='input-select-location'
                  onClick={toogleLocation}
                  onChange={getValueInputSelect}
                  placeholder='Escolha seu destino'
                  value={valueInputSelect}
                />
                <MapPin className='icon-location' size={24} color="#ff9800" />
              </div>
              <div className={showDestination ? 'container-location-open' : 'container-location-close'}>
                    {
                      inputSelect ? (
                        <h3>Destinos Favoritos</h3>
                      ):''
                    }
                    {
                      showDestination
                      &&
                      inputSelect ? (
                        location.slice(0, 4).map((location, index) =>(
                          <div className="location-list">
                            <SelectLocation
                              id={index.length}
                              data={location}
                              onSelectDestination={currentDestination => teste(currentDestination)}
                            />
                          </div>
                        ))
                      ):(
                        filterInputSelect.slice(0,4).map((filter) =>(
                          <div className="location-list">
                            <SelectLocation
                              data={filter}
                              onSelectDestination={currentDestination => teste(currentDestination)}
                            />
                          </div>
                        ))
                      )
                    }
              </div>
            </div>
            <div className="input-calendar">
              <div className="input">
                <input
                  onClick={toggleCalendar}
                  type="text"
                  placeholder='check in - Check out'
                  value={selectDate ? formatDate(startDate) : ''}
                />
                <Calendar className='icon-calendar' size={24} color="#ff9800" />
              </div>
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
            <button className='submit-search' onClick={event => searchDestinationSelect(event)}>Pesquisar</button>
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
                onSelectCategory={currentCategory => filterProductByCategory(currentCategory)}
              />
            ))
          }
        </div>
      </section>
      <section className='container-product'>
        {
          listProduct ?
          (
            <h2>Lista de produtos</h2>
          ):selectCategory ? (
            <h2>{objectFilter[0].category}</h2>
          ): selectCity ? (
            <h2>{objectFilter[0].cidade}</h2>
          ): ''
        }
        <div className="list-products">
          {
            listProduct ? (
            product.map((products, index) => (
              <CardProduct
                id={index.length}
                data={products}
              />
            ))
            ):objectFilter.map((products, index) => (
              <CardProduct
                id={index.length}
                data={products}
              />
            ))
          }
        </div>
      </section>
    </div>
  )
}

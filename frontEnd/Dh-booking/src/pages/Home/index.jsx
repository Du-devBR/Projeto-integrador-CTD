import './style.sass'
import './responsive.sass'
import { useEffect, useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import { Calender } from '../../components/Calender';
import css from '@emotion/styled';
import { SelectLocation } from '../../components/Select';
import { CardCategoria } from '../../components/CardCategoria';
import moment from 'moment'
import 'moment/min/locales'
import {apiUrl} from '../../mainApi'

//****** */ imports para teste sem api ******
// import {category} from '../../assets/js-mock/category'
// import { product } from '../../assets/js-mock/products'
import { CardProduct } from '../../components/CardProduto';
import {MapPin, Calendar} from 'phosphor-react'
import { CalenderHome } from '../../components/CalenderHome';


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
    fetch(`${apiUrl}api/categoria`)
    .then(res => {
      res.json()
      .then(data => {
        setCategory(data)
      })
    })
  }, [])

  useEffect(() =>{
    if(showDestination){
      fetch(`${apiUrl}api/cidade`)
      .then(res => {
        res.json()
        .then(data => {
          setLocation(data)
        })
      })
    }
  }, [showDestination])

  useEffect(() => {
    fetch(`${apiUrl}api/produto`)
    .then(res => {
      res.json()
      .then(data => {
        setProducts(data)
      })
    })
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
    const filterObjects = products.filter((object) => object.accommodation.city.name.toLowerCase().includes(valueInputSelect.toLowerCase()))
    return filterObjects
  }

  const filterProductByCategory = (currentCategory) => {

    fetch(`${apiUrl}api/produto/buscaPorCategoria?categoryName=${currentCategory}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setSelectCategory(true)
        setSelectCity(false)
      })
  }

  const searchDestinationWithData = (event) => {
    // event.preventDefault()
    const dataInitial = moment(startDate[0], 'YYYY-MM-DD').format('YYYY-MM-DD')
    const dataFinal = moment(startDate[1], 'YYYY-MM-DD').format('YYYY-MM-DD')
    const filterProduct = products.filter(result =>
      moment(result.date, 'MMM DD YYYY HH:mm:ss [GMT]ZZ').isBetween(dataInitial, dataFinal, null, '[]')
    )
    setObjectFilter(filterProduct)
    setListProduct(false)
  }

  const searchDestinationSelect = (event) => {
    // event.preventDefault()
    if(valueInputSelect !== null){
      fetch(`${apiUrl}api/produto/buscaPorCidade?cityName=${valueInputSelect}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setSelectCity(true)
        setSelectCategory(false)
      })
    }else{
      console.log('errro')
    }
  }

  // const searchDestinationSelect = (event) => {
  //   // event.preventDefault()
  //   // if(valueInputSelect !== null){
  //     const timeStampInit = startDate[0]
  //     const timeStampFinal = startDate[1]
  //     const initial = timeStampInit.getTime()
  //     const final = timeStampFinal.getTime()

  //     console.log(initial)
  //     fetch(`${apiUrl}api/produto/buscaPorCidadeEDatas?cityName=${valueInputSelect}&startDate=${initial}&endDate=${final}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setProducts(data)
  //       setSelectCity(true)
  //       setSelectCategory(false)
  //     })
  //   // }else{
  //   //   console.log('errro')
  //   // }
  // }

  const searchProduct = (event) => {
    event.preventDefault()

      const objFilterBySelect = filterProductBySelect()
      const objFilterByDate = searchDestinationWithData(startDate)

      const filteredProducts = objFilterBySelect.filter(product => objFilterByDate.includes(product))

      // console.log(filteredProducts)
      setListProduct(false)

    // else if (startDate) {
    //   searchDestinationWithData()
    // }else if (valueInputSelect) {
    //   searchDestinationSelect()
    // }
  }

  function toggleCalendar(){
    setShowCalendar(!showCalendar)
    setShowDestination(false)
  }

  function toogleLocation(){
    setShowDestination(!showDestination)
  }

  console.log(startDate)

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
                id='id_inputSelect'
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
                      <CalenderHome
                        id={startDate}
                        onSelectedData={dataSelecionada}
                        selectedRange={startDate}
                      />
                  }
                </div>
            </div>
            <button
              id='id_search'
              className='submit-search'
              onClick={event =>  searchDestinationSelect(event)}
              >
                Pesquisar
            </button>
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
            selectCategory ? (
                <h2>{products[0].accommodation.category.name}</h2>
            ): selectCity ? (
              <h2>{products[0].accommodation.city.name}</h2>
            ): <h2>Acomodações em alta</h2>
          ): ''
        }
        <div className="list-products">
          {
            listProduct ? (
            products.slice(0, 10).map((products, index) => (
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

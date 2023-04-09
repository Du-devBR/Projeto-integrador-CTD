import './style.sass'
import './responsive.sass'

import { products } from '../../assets/js-mock/products'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowUUpLeft } from 'phosphor-react'
import { Calender } from '../../components/Calender'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../hooks/userLogin'
import { apiUrl } from '../../mainApi'
import { sweetAlertSuccess } from '../../hooks/sweetAlert'

export function Reservation(){

  const [dataProduct, setDataProduct] = useState({})
  const [product, setProduct] = useState()
  const [saveData, setSaveData] = useState(false)

  const [startDate, setStartDate] = useState([null, null])
  const [selectDate, setSelectDate] = useState(false)

  const [reservation, setReservation ] = useState([])
  const [disbaledDate, setDisabledDate ] = useState([])

  const [initial, setInitial] = useState('')
  const [final, setFinal] = useState('')

  const [errorCity, setErrorCity] = useState(false)
  const [erroHour, setErrorHour] = useState(false)
  const [messagerErrorData, setMessageErrorData] = useState(false)
  const [nameUser, setNameUser] = useState()
  const [lastNameUser, setLastNameUser] = useState()
  const [email, setEmail] = useState()
  const [city, setCity] = useState('')
  const [hour, setHour] = useState('')

  console.log(startDate)


  const {login} = useContext(UserContext)

  const {id} = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData(){
      try{
        const response = fetch(`${apiUrl}api/produto/${id}`)
        const data = await (await response).json()
        setDataProduct(data)
        setSaveData(true)
        console.log(data)

      }catch(error){
        console.error(error)
      }
    }
    fetchData()
  }, [id])

  useEffect(() => {

    fetch(`${apiUrl}api/reserva`)
      .then(res => res.json())
      .then(data => {
        setReservation(data)

        const filterReserv = reservation.filter(reserv => reserv.product.id === product.id)
        const eventos = filterReserv.map(reserv => {
          return{
            id: reserv.id,
            start: new Date(reserv.checkIn),
            end: new Date(reserv.checkOut),
            color: '#DB2828'
          }
        })
    setDisabledDate(eventos)
    // setBlockedRanges(eventos)
    })

  }, [product])

  useEffect(() => {
    if(saveData){
      setProduct(dataProduct)
    }
  }, [dataProduct])

  useEffect(() => {
    const userLocal = localStorage.getItem('nameUser')
    const lastNameLocal = localStorage.getItem('lastName')
    const emailLocal = localStorage.getItem('email')
    setNameUser(JSON.parse(userLocal))
    setLastNameUser(JSON.parse(lastNameLocal))
    setEmail(JSON.parse(emailLocal))

  }, [login])

  const dataSelecionada = (range) => {
    setStartDate(range)
    setSelectDate(true)
    setMessageErrorData(false)
    formatDate(range)
    calculateBookingDays()
    calculateTotalCost()
  }

  const calculateBookingDays = () => {
    const checkin = new Date(startDate[0])
    const timeStampCheckin = checkin.getTime()
    const checkout = new Date(startDate[1])
    const timeStampCheckout = checkout.getTime()

    const differenceTimeStamp = timeStampCheckout - timeStampCheckin

    const differenceDays = Math.ceil(differenceTimeStamp / (1000 * 60 * 60 * 24))

    return differenceDays
  }

  const calculateTotalCost = () => {
    const priceAccommodation = product?.price

    return priceAccommodation * calculateBookingDays()
  }

  const formatDate = (range) => {
    if (!range) {
      return '';
    }
    const startDay = range[0].toLocaleString('pt-BR', { day: '2-digit' });
    const startMonth = range[0].toLocaleString('pt-BR', { month: 'short' });
    const finalDay = range[1].toLocaleString('pt-BR', { day: '2-digit' });
    const finalMonth = range[1].toLocaleString('pt-BR', { month: 'short' });

    setInitial(`${startDay} de ${startMonth}`)
    setFinal(`${finalDay} de ${finalMonth}`)
  }

  const submitForm = (event) => {

    const checkin = new Date(startDate[0])
    const timeStampCheckin = checkin.getTime()
    const checkout = new Date(startDate[1])
    const timeStampCheckout = checkout.getTime()
    const localStorageUser = JSON.parse(localStorage.getItem("dados"))

    if((hour !== '' || null) && (city !== '' || null) && selectDate === true){
      event.preventDefault()
      const newReservation = {
        checkIn: timeStampCheckin,
        checkOut: timeStampCheckout,
        finalPrice: calculateTotalCost(),
        product: { id: id},
        user: {id: localStorageUser.userId}
      }

      const requestHeaders = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${localStorageUser.token}`

      }
      const requestConfig = {
          method: 'POST',
          body: JSON.stringify(newReservation),
          headers: requestHeaders,
      }

      console.log(requestConfig)

      fetch(`${apiUrl}api/reserva`, requestConfig)
      .then(res => {
        if(res.ok){
            res.json()
            .then(data => {
                console.log(data)
                sweetAlertSuccess('Parabens!!!', 'Reserva cadastrado com sucesso!', 3000)
                setTimeout(() => {
                  navigate("/home")
                }, 3500);
            })
          }else {
            console.log('Erro ao realizar post')
          }
      })
    }else{
      error()
      console.log('erro')
    }
  }

  const error = () => {
    if(city.length <= 3){
      setErrorCity(true)
    }else{
      setErrorCity(false)
    }if(hour.length === 0){
      setErrorHour(true)
    }else{
      setErrorHour(false)
    }if(selectDate === false){
      setMessageErrorData(true)
    }else{
      setMessageErrorData(false)
    }
  }

  return(
    <div className="container-reservation">
      <div className="header-product-detail">
        <div className="title-product-detail">
          <span>{product?.accommodation?.category?.name}</span>
          <h1>{product?.accommodation?.name}</h1>
        </div>
        <div className="header-links">
          <Link
            to={`/produto/${id}`}
            className='btn-back-to-home'>
              <ArrowUUpLeft size={32} color="#fafafa" weight="fill" />
          </Link>
        </div>
      </div>
      <section className="container-info-reservation">
        <h2>Complete seus dados</h2>
        <div className="container-form">
          <div className="container-form-reservation">
            <form  action="">
              <div className="flex-row">
                <div className="input-name">
                  <label htmlFor="">Nome</label>
                  <input disabled={true} type="text" placeholder='John' value={nameUser} />
                </div>
                <div className="input-lastname">
                  <label htmlFor="">Sobrenome</label>
                  <input disabled={true} type="text" placeholder='Doe' value={lastNameUser} />
                </div>
              </div>
              <div className="flex-row">
                <div className="input-email">
                  <label htmlFor="">Email</label>
                  <input disabled={true} type="text" placeholder='digital@teste.com' value={email} />
                </div>
                <div className="input-city">
                  <label htmlFor="">Cidade</label>
                  <input id='id_selectCity' className={errorCity ? 'input-error' : ''} type="text" placeholder='Digite sua cidade' onChange={event => setCity(event.target.value)}/>
                </div>
              </div>
            </form>
            <div className="container-select-data">
              <h2>Selecione sua data da reserva</h2>
                <Calender
                  id={startDate}
                  onSelectedData={dataSelecionada}
                  selectedRange={startDate}
                  onDisbaledDate={disbaledDate}
                />
            </div>
            <div className="container-checkin">
              <h2>Escolha seu horário de chegada</h2>
              <div className="info-time-checkin">
                <p>Escolha um horário de check-in para que possamos deixar tudo preparado.</p>
                <div className="select-checkin">
                  <label htmlFor="">Selecione a sua hora prevista de chegada</label>
                  <select className={erroHour ? 'input-error' : ''} name="" id="id_selectCity" onChange={event => setHour(event.target.value)}>
                    <option value=""></option>
                    <option value="00:00">00:00</option>
                    <option value="01:00">01:00</option>
                    <option value="02:00">02:00</option>
                    <option value="03:00">03:00</option>
                    <option value="04:00">04:00</option>
                    <option value="05:00">05:00</option>
                    <option value="06:00">06:00</option>
                    <option value="07:00">07:00</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                    <option value="23:00">23:00</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="container-detail-reservation">
            <h2>Detalhes da reserva</h2>
            <img src={product?.image[0]?.url} alt="" />
            <div className="info-product">
              <div className="name-price-product">
                <span>{product?.accommodation?.category?.name}</span>
                <span className='price-product'>R${product?.price} noite</span>
              </div>
              <h3>{product?.accommodation?.name}</h3>
              <span>{product?.accommodation?.city?.name}</span>
            </div>
              {
                messagerErrorData ? (
                  <span className='message-error-data'>Selecione uma data para reserva</span>
                ): ''
              }
            <div className="info-checkin">
              <h3>Check in</h3>
              <span>{selectDate ? initial : ''}</span>
            </div>
            <div className="info-checkin">
              <h3>Check out</h3>
              <span>{selectDate ? final : ''}</span>
            </div>
            <div className="total-price-product">
              <span>{selectDate ? `R$${product?.price} x ${calculateBookingDays()} noites` : ''}</span>
              <div className="total-cost">
                <span>{selectDate ? 'Total da Reserva' : ''}</span>
                <span>{selectDate ? `R$${calculateTotalCost()}` : ''}</span>
              </div>
            </div>

            <button
              onClick={event => submitForm(event)}
              className='btn-confirm-reservation'
              id='id_submitRervation '
                >
                  Confirmar Reserva
              </button>
          </div>
        </div>
        <div className="container-product-policies">
            <h2>O que você precisa saber?</h2>
            <div className="product-policies">
              <div className="rules">
                <h3>Regras</h3>
                <ul>
                  {
                    products[`${id}` - 1].policies.rules.map(rule => (
                      <p>{rule}</p>
                    ))
                  }
                </ul>
              </div>
              <div className="healths">
                <h3>Saude e Segurança</h3>
                <ul>
                  {
                  products[`${id}` - 1].policies.health.map(healths => (
                    <p>{healths}</p>
                  ))
                }
                </ul>
              </div>
              <div className="cancellation">
                <h3>Politica de Cancelamento</h3>
                <ul>
                  {
                  products[`${id}` - 1].policies.cancellation.map(cancellations => (
                    <p>{cancellations}</p>
                  ))
                }
                </ul>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

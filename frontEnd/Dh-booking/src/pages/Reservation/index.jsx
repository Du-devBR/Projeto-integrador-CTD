import './style.sass'
import './responsive.sass'

import { product } from '../../assets/js-mock/products'
import { Link, useParams } from 'react-router-dom'
import { ArrowUUpLeft } from 'phosphor-react'
import { Calender } from '../../components/Calender'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../hooks/userLogin'
import { apiUrl } from '../../mainApi'

export function Reservation(){

  const [dataProduct, setDataProduct] = useState({})
  const [product, setProduct] = useState()
  const [saveData, setSaveData] = useState(false)

  const [startDate, setStartDate] = useState([null, null])
  const [selectDate, setSelectDate] = useState(false)

  const [nameUser, setNameUser] = useState()
  const [lastNameUser, setLastNameUser] = useState()
  const [email, setEmail] = useState()
  const {login} = useContext(UserContext)

  const {id} = useParams()

  useEffect(() => {
    async function fetchData(){
      try{
        const response = fetch(`${apiUrl}api/produto/${id}`)
        const data = await (await response).json()
        setDataProduct(data)
        setSaveData(true)

      }catch(error){
        console.error(error)
      }
    }
    fetchData()
  }, [id])

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

  }

  const formatDate = (range) => {
    if (!range) {
      return '';
    }

    const startDay = range[0].toLocaleString('pt-BR', { day: '2-digit' });
    const startMonth = range[0].toLocaleString('pt-BR', { month: 'short' });
    return `${startDay} de ${startMonth}`;
  }

  const submitForm = (event) => {
    event.preventDefault()
    const newReservation = {
      dateHourReservation: startDate[0],
      dateHourFinalReservation: startDate[1] ,
      product: { id: id},
      user: {id: 1}
    }

    const requestHeaders = {
      'Content-Type': 'application/json',

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
            sweetAlertSuccess('Usuario cadastrado com sucesso!')
        })
      }
    })
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
                  <input type="text" placeholder='Digite sua cidade' />
                </div>
              </div>
            </form>
            <div className="container-select-data">
              <h2>Selecione sua data da reserva</h2>
                <Calender
                  id={startDate}
                  onSelectedData={dataSelecionada}
                  selectedRange={startDate}
                />
            </div>
            <div className="container-checkin">
              <h2>Escolha seu horário de chegada</h2>
              <div className="info-time-checkin">
                <p>Escolha um horário de check-in para que possamos deixar tudo preparado.</p>
                <div className="select-checkin">
                  <label htmlFor="">Selecione a sua hora prevista de chegada</label>
                  <select name="" id="" >
                    <option value=""></option>
                    <option value="">00:00</option>
                    <option value="">01:00</option>
                    <option value="">02:00</option>
                    <option value="">03:00</option>
                    <option value="">04:00</option>
                    <option value="">05:00</option>
                    <option value="">06:00</option>
                    <option value="">07:00</option>
                    <option value="">08:00</option>
                    <option value="">09:00</option>
                    <option value="">10:00</option>
                    <option value="">11:00</option>
                    <option value="">12:00</option>
                    <option value="">13:00</option>
                    <option value="">14:00</option>
                    <option value="">15:00</option>
                    <option value="">16:00</option>
                    <option value="">17:00</option>
                    <option value="">18:00</option>
                    <option value="">19:00</option>
                    <option value="">20:00</option>
                    <option value="">21:00</option>
                    <option value="">22:00</option>
                    <option value="">23:00</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="container-detail-reservation">
            <h2>Detalhes da reserva</h2>
            <img src={product?.image[0]?.url} alt="" />
            <div className="info-product">
              <span>{product?.accommodation?.category?.name}</span>
              <h1>{product?.accommodation?.name}</h1>
              <span>{product?.accommodation?.city?.name}</span>
            </div>
            <div className="info-checkin">
              <h3>Check in</h3>
              <span>{selectDate ? formatDate(startDate) : ''}</span>
            </div>
            <button
            onClick={event => submitForm(event)}
              className='btn-confirm-reservation'>Confirmar Reserva</button>
          </div>
        </div>
        <div className="container-product-policies">
            <h2>O que você precisa saber?</h2>
            <div className="product-policies">
              <div className="rules">
                <h3>Regras</h3>
                <ul>
                  {/* {
                    product[`${id}` - 1].policies.rules.map(rule => (
                      <p>{rule}</p>
                    ))
                  } */}
                </ul>
              </div>
              <div className="healths">
                <h3>Saude e Segurança</h3>
                <ul>
                  {/* {
                  product[`${id}` - 1].policies.health.map(healths => (
                    <p>{healths}</p>
                  ))
                } */}
                </ul>
              </div>
              <div className="cancellation">
                <h3>Politica de Cancelamento</h3>
                <ul>
                  {/* {
                  product[`${id}` - 1].policies.cancellation.map(cancellations => (
                    <p>{cancellations}</p>
                  ))
                } */}
                </ul>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

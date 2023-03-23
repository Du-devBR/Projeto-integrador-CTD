import './style.sass'
import './responsive.sass'

import { product } from '../../assets/js-mock/products'
import { Link, useParams } from 'react-router-dom'
import { ArrowUUpLeft } from 'phosphor-react'
import { Calender } from '../../components/Calender'

export function Reservation(){

  const {id} = useParams()
  return(
    <div className="container-reservation">
      <div className="header-product-detail">
        <div className="title-product-detail">
          <span>{product[`${id}` - 1].category}</span>
          <h1>{product[`${id}` - 1].title}</h1>
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
        <div className="container">
          <div className="container-form-reservation">
            <form  action="">
              <div className="flex-row">
                <div className="input-name">
                  <label htmlFor="">Nome</label>
                  <input type="text" placeholder='John' />
                </div>
                <div className="input-lastname">
                  <label htmlFor="">Sobrenome</label>
                  <input type="text" placeholder='Doe' />
                </div>
              </div>
              <div className="flex-row">
                <div className="input-email">
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder='digital@teste.com' />
                </div>
                <div className="input-city">
                  <label htmlFor="">Cidade</label>
                  <input type="text" placeholder='São Paulo' />
                </div>
              </div>
            </form>
            <div className="container-select-data">
              <h2>Selecione sua data da reserva</h2>
              <Calender />
            </div>
            <div className="container-checkin">
              {/* colocar selection com option de horarios para checkin */}
            </div>
          </div>
          <div className="container-detail-reservation">
            <h2>Detalhes da reserva</h2>
            <img src={product[`${id}` - 1].img} alt="" />
            <div className="info-product">
              <span>{product[`${id}` - 1].category}</span>
              <h1>{product[`${id}` - 1].title}</h1>
              <span>{product[`${id}` - 1].location}</span>
            </div>
            <div className="info-checkin">
              <h3>Check in</h3>
              <span>23/11/2023</span>
            </div>
            <button className='btn-confirm-reservation'>Confirmar Reserva</button>
          </div>
        </div>
        <div className="container-product-policies">
            <h2>O que você precisa saber?</h2>
            <div className="product-policies">
              <div className="rules">
                <h3>Regras</h3>
                <ul>
                  {
                  product[`${id}` - 1].policies.rules.map(rule => (
                    <p>{rule}</p>
                  ))
                }
                </ul>
              </div>
              <div className="healths">
                <h3>Saude e Segurança</h3>
                <ul>
                  {
                  product[`${id}` - 1].policies.health.map(healths => (
                    <p>{healths}</p>
                  ))
                }
                </ul>
              </div>
              <div className="cancellation">
                <h3>Politica de Cancelamento</h3>
                <ul>
                  {
                  product[`${id}` - 1].policies.cancellation.map(cancellations => (
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

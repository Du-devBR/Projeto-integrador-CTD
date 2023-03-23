import './style.sass'
import './responsive.sass'

import { product } from '../../assets/js-mock/products'
import { Link, useParams } from 'react-router-dom'
import { ArrowUUpLeft } from 'phosphor-react'

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
            <form action="">
              formulario
            </form>
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
      </section>
    </div>
  )
}

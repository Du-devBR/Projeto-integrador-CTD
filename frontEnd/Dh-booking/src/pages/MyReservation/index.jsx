import './style.sass'
import { useEffect, useState } from "react"
import { apiUrl } from "../../mainApi"
import { CardProduct } from "../../components/CardProduto"
import logo from "../../assets/img/logo.svg"
import { Link } from "react-router-dom"

export function MyReservation(){
  const [reservations, setReservations] = useState([])
  const [userReservation, setUserReservation] = useState(false)

  useEffect(() => {
    const localStorageDados = JSON.parse(localStorage.getItem('dados'))
    if(localStorageDados){
      const userIdLocal = localStorageDados.userId
      if(userIdLocal !== null){
        fetch(`${apiUrl}api/reserva/buscaPorIdDoUsuario?idUser=${userIdLocal}`)
          .then(res => res.json())
          .then(dados => {
            if(dados){
              setReservations(dados)
              setUserReservation(true)
              console.log(reservations)
            }
          })
      }
    }
  }, [])

  function formatDateReservation(date){
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
    return new Date(date).toLocaleDateString('pt-BR', options)
  }
  return(
    <div className="container-myReservation">
      {
        userReservation ?
        (
            <div className="container-card-reservation">
              {
                reservations.map(reservation => (
                  <div className="card-product-reserved">
                    <div className="header-reserved">
                      <div className="name-category">
                        <span>{reservation.product.accommodation.category.name}</span>
                        <h2>{reservation.product.accommodation.name}</h2>
                      </div>
                      <span className='price-product'>{`R$${reservation.finalPrice}`}</span>
                    </div>
                    <img src={reservation.product.image[0].url} alt="" />
                    <div className="info-product">
                      <h3 className='name-product'>{reservation.product.name}</h3>
                      <span>{reservation.product.accommodation.city.name}</span>
                    </div>
                    <div className="info-reserved">
                      <div className="checkin">
                        <h3>Check-in</h3>
                        <span>{formatDateReservation(reservation.checkIn)}</span>
                      </div>
                      <div className="checkout">
                        <h3>Check-out</h3>
                        <span>{formatDateReservation(reservation.checkIn)}</span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

        ): <div className="unreserved-user">
            <img src={logo} alt="" />
            <span>Você ainda não possui reservas.</span>
            <Link className='btn-back-to-home' to={'/'}>Volte para home</Link>
           </div>
      }
    </div>
  )
}

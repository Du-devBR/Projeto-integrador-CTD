import './style.sass'
import {ArrowUUpLeft, ShareNetwork, Heart, MapPin} from 'phosphor-react'
import './responsive.sass'
import { Link, useParams } from 'react-router-dom'
import { ModalProduto } from '../../components/ModalProduto'
import { product } from '../../assets/js-mock/products'
import { Calender } from '../../components/Calender'
import {MapContainer, TileLayer, Popup, Marker} from 'react-leaflet'
import { useEffect, useState } from 'react'


export function Product(){

  const [openModal, setOpenModal] = useState(false)
  const {id} = useParams()
  const [coordinates, setCoordinates] = useState([51.505, -0.09]);

  console.log(coordinates)


  const getCoordinates = (event) =>{
    event.preventDefault()

      fetch(`https://nominatim.openstreetmap.org/search?q=${product[`${id}` -1].location}&format=json&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setCoordinates([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        }
      })
      .catch((error) => console.error(error));
  }

  return(
    <div className={!openModal ? "container-product-detail": "container-open-modal"}>
      {
        !openModal ?
        (
        <>
          <div className="header-product-detail">
            <div className="title-product-detail">
              <span>{product[`${id}` - 1].category}</span>
              <h1>{product[`${id}` - 1].title}</h1>
            </div>
            <div className="header-links">
              <span><Heart size={24} color="#fafafa" weight="light" /></span>
              <span><ShareNetwork size={24} color="#fafafa" weight="light" /></span>
              <Link
                to={'/home'}
                className='btn-back-to-home'>
                  <ArrowUUpLeft size={32} color="#fafafa" weight="fill" />
              </Link>
            </div>
          </div>
          <div className="container-location">
            <div className="location-product">
              <MapPin size={24} color="#005df4" weight="duotone" />
              <div className="location-data">
                <span>{product[`${id}` - 1].location}</span>
                <button
                  onClick={getCoordinates}
                  className='button-view-location-map'
                  >
                    ver no mapa
                </button>
              </div>
            </div>
            <div className="reputation-product">
                <div className='rating-scale-product'>
                  <span>8</span>
                </div>
                <span className='name-rating-product'>Muito bom</span>
            </div>
          </div>
          <div className="container-picture-product">
            {
              <img className='principal-picture-view' src={product[`${id}` - 1].img} alt="" />
            }
            <div className="carousel-picture">
              {
                product[`${id}` - 1].pictures.map(pictures => (
                  <img src={pictures} alt="" />
                ))
              }
            </div>
            <button
              onClick={() => setOpenModal(!openModal)}
              className='view-more-picture'
              >
                Ver mais
            </button>
          </div>
          <div className="container-description">
            <h2>{product[`${id}` - 1].title}</h2>
            <p>{product[`${id}` - 1].description}</p>
          </div>
          <div className='container-characteristics'>
            <h2>O que {product[`${id}` - 1].title} oferece?</h2>
            <ul>
              {
                product[`${id}` - 1].offers.map(offer => (
                  <li>{offer}</li>
                ))
              }
            </ul>
          </div>
          <div className='container-schedule'>
            <h2>Datas disponíveis</h2>
            <div className="container-calendar">
              <div className="calendar">
                <Calender />
                {/* <Calender /> */}
              </div>
              <div className='start-reservation'>
                <span>Adicione as data da sua viagem para obter preços exatos.</span>
                <button className='btn-reservation'>Iniciar reserva</button>
              </div>
            </div>
          </div>
          <div className="container-map">
            <MapContainer center={coordinates} zoom={10} style={{height: '300px'}}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
              />
              <Marker position={coordinates}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
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
        </>
          ):(
            <ModalProduto
              data={product[`${id}` - 1].pictures}
              onCloseModal={() => setOpenModal(false)}
            />
          )
      }
    </div>
  )
}

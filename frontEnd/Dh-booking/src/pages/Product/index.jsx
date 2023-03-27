import './style.sass'
import {ArrowUUpLeft, ShareNetwork, Heart, MapPin} from 'phosphor-react'
import './responsive.sass'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ModalProduto } from '../../components/ModalProduto'
import { Calender } from '../../components/Calender'
import {MapContainer, TileLayer, Popup, Marker} from 'react-leaflet'
import { useEffect, useState } from 'react'
import { apiUrl } from '../../mainApi'


export function Product(){

  const [openModal, setOpenModal] = useState(false)
  const {id} = useParams()
  const navigate = useNavigate()
  const [coordinates, setCoordinates] = useState([51.505, -0.09]);

  const [dataProduct, setDataProduct] = useState({})
  const [product, setProduct] = useState()
  const [saveData, setSaveData] = useState(false)

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

  const getCoordinates = (event) =>{
    event.preventDefault()
      fetch(`https://nominatim.openstreetmap.org/search?q=${product?.accommodation?.city?.name}&format=json&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setCoordinates([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        }
      })
      .catch((error) => console.error(error));
  }

  const redirectReservation = () => {
    const token = localStorage.getItem("token")

    console.log(token)
    if(token === null){
      navigate('/login', { state: { from: `/produto/${id}/reserva` } })
    }else{
      navigate(`/produto/${id}/reserva`)
    }
  }
  return(
    <div className={!openModal ? "container-product-detail": "container-open-modal"}>
      {
        !openModal ?
        (
        <>
          <div className="header-product-detail">
            <div className="title-product-detail">
              <span>{product?.accommodation?.category?.name}</span>
              <h1>{product?.accommodation?.name}</h1>
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
                <span>{product?.accommodation?.city?.name}</span>
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
              <img className='principal-picture-view' src={product?.image[0]?.url} alt="" />
            }
            <div className="carousel-picture">
              {
                product?.image.map(pictures => (
                  <img src={pictures.url} alt="" />
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
            <h2>{product?.accommodation?.name}</h2>
            <p>{product?.description}</p>
          </div>
          <div className='container-characteristics'>
            <h2>O que {product?.accommodation?.name} oferece?</h2>
            <ul>
              {
                product?.caracteristic.map(offer => (
                  <li>{offer.description}</li>
                ))
              }
            </ul>
          </div>
          <div className='container-schedule'>
            <h2>Datas disponíveis</h2>
            <div className="container-calendar">
              <div className="calendar">
                <Calender />
              </div>
              <div className='start-reservation'>
                <span>Adicione as data da sua viagem para obter preços exatos.</span>
                {/* <Link to={`/produto/${id}/reserva`} className='btn-reservation'>Iniciar reserva</Link> */}
                <button onClick={redirectReservation} className='btn-reservation'>Iniciar reserva</button>
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
                {/* <ul>
                  {
                  product[`${id}` - 1].policies.rules.map(rule => (
                    <p>{rule}</p>
                  ))
                }
                </ul> */}
              </div>
              <div className="healths">
                <h3>Saude e Segurança</h3>
                {/* <ul>
                  {
                  product[`${id}` - 1].policies.health.map(healths => (
                    <p>{healths}</p>
                  ))
                }
                </ul> */}
              </div>
              <div className="cancellation">
                <h3>Politica de Cancelamento</h3>
                {/* <ul>
                  {
                  product[`${id}` - 1].policies.cancellation.map(cancellations => (
                    <p>{cancellations}</p>
                  ))
                }
                </ul> */}
              </div>
            </div>
          </div>
        </>
          ):(
            <ModalProduto
              data={product?.image}
              onCloseModal={() => setOpenModal(false)}
            />
          )
      }
    </div>
  )
}

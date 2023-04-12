import './style.sass'
import {ArrowUUpLeft, ShareNetwork, Heart, MapPin, InstagramLogo} from 'phosphor-react'
import './responsive.sass'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ModalProduto } from '../../components/ModalProduto'
import { Calender } from '../../components/Calender'
import {MapContainer, TileLayer, Popup, Marker} from 'react-leaflet'
import { useEffect, useState } from 'react'
import { apiUrl } from '../../mainApi'
import { products } from '../../assets/js-mock/products'
import { sweetAlertWarning } from '../../hooks/sweetAlert'
import instragram from '../../assets/img/instagram.svg'
import Calendar from 'react-calendar'
import { useRef } from 'react'


export function Product(){

  const [openModal, setOpenModal] = useState(false)
  const {id} = useParams()
  const navigate = useNavigate()
  const [coordinates, setCoordinates] = useState([51.505, -0.09]);

  const [dataProduct, setDataProduct] = useState({})
  const [product, setProduct] = useState()
  const [reservation, setReservation ] = useState([])
  const [disbaledDate, setDisabledDate ] = useState([])
  const [saveData, setSaveData] = useState(false)
  const [shareProduct, setShareProduct] = useState(false)
  const [url, setUrl] = useState('')
  const [copyUrl, setCopyUrl] = useState('')

  const [regulation, setRegulation] = useState([])
  const [filterRegulation, setFilterRegulation] = useState([])
  const myRef = useRef(null);

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
    fetch(`${apiUrl}api/regulamentacao`)
    .then(res => res.json())
    .then(data => {
      setRegulation(data)
    })
  }, [])

  useEffect(() => {
    const filter = regulation.filter(regul => regul.accommodation[0].id === product?.accommodation?.id)
    setFilterRegulation(filter)
  }, [regulation])

  console.log(filterRegulation)

  useEffect(() => {
    if(saveData){
      fetch(`${apiUrl}api/reserva`)
      .then(res => res.json())
      .then(data => {
        setReservation(data)
      })
    }
  }, [saveData])

  useEffect(() => {
    if (product && reservation.length > 0) {
      const filterReserv = reservation.filter(
        (reserv) => reserv.product.id === product.id
      )
      const eventos = filterReserv.map((reserv) => {
        return {
          id: reserv.id,
          start: new Date(reserv.checkIn),
          end: new Date(reserv.checkOut),
          color: "#DB2828",
        }
      })
      setDisabledDate(eventos)
    }
  }, [product, reservation])

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
        myRef.current.scrollIntoView({ behavior: 'smooth' });
      })
      .catch((error) => console.error(error));
  }

  async function redirectReservation ()  {
    const token = JSON.parse(localStorage.getItem("dados"))
    if(token === null || token === ''){
      const confirm = await sweetAlertWarning('Fazer login e continuar sua reserva', '', 'Ir para login', 'Continuar pesquisando', '#ff9800', '#eaeaea')
      if(confirm){
        navigate('/login', { state: { from: `/produto/${id}/reserva` } })
      }
    }else{
      navigate(`/produto/${id}/reserva`)
    }
  }

  function shareProductSocialNetwork ()  {
    if(shareProduct){
      setShareProduct(false)
    }else{
      setShareProduct(true)
    }
  }

  useEffect(() => {

    setUrl(window.location.href)

  }, [shareProduct])

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50){
        setShareProduct(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const dataSelecionada = () => {
    console.log('Sem aplicação no momento')
  }

  const copyUrlProduct = () => {
    const input = document.getElementById('inputCopy')
    input.select()
    document.execCommand('copy')
    setCopyUrl(input.value)
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
              <button
                className='btn-share-product'
                onClick={shareProductSocialNetwork}
                >
                  <ShareNetwork size={24} color="#fafafa" weight="light" />
              </button>
              <Link
                to={'/home'}
                className='btn-back-to-home'>
                  <ArrowUUpLeft size={32} color="#fafafa" weight="fill" />
              </Link>
              {
                shareProduct
                &&
                <div className='container-share-product'>
                  <div className="share">
                    <button
                      className='btn-close-share'
                      onClick={() => setShareProduct(false)}
                      >
                        X
                    </button>
                    <h3>Compartilhe sua alegria com os amigos.</h3>
                    <div className="share-link-product">
                      <input type="text" value={url} id='inputCopy'/>
                      <button onClick={copyUrlProduct} >{copyUrl ? 'Copiado' : 'Copiar Link'}</button>
                    </div>
                  </div>
                </div>
              }
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
                product?.image.slice(0, 4).map(pictures => (
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
                  <div className='caracteristic'>
                    <img src={offer.iconUrl.url} alt="" />
                    <li>{offer.description}</li>
                  </div>
                ))
              }
            </ul>
          </div>
          <div className='container-schedule'>
            <h2>Datas disponíveis</h2>
            <div className="container-calendar">
              <div className="calendar">
                <Calender
                  onDisbaledDate={disbaledDate}
                  onSelectedData={dataSelecionada}
                />
              </div>
              <div className='start-reservation'>
                <span>Garanta agora mesmo sua reserva.</span>
                {/* <Link to={`/produto/${id}/reserva`} className='btn-reservation'>Iniciar reserva</Link> */}
                <button
                  onClick={redirectReservation}
                  className='btn-reservation'
                  id='id_submitReservation'
                    >
                      Iniciar reserva
                  </button>
              </div>
            </div>
          </div>
          <div className="container-map" ref={myRef}>
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
                  {filterRegulation.map((rule, index) => (
                    <li key={index}>
                      {rule.regrasCasa.map((ruleItem, index) => (
                        <p key={index}>{ruleItem}</p>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="healths">
                <h3>Saude e Segurança</h3>
                <ul>
                  {filterRegulation.map((rule, index) => (
                    <li key={index}>
                      {rule.regrasSaude.map((ruleItem, index) => (
                        <p key={index}>{ruleItem}</p>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cancellation">
                <h3>Politica de Cancelamento</h3>
                <ul>
                  {filterRegulation.map((rule, index) => (
                    <li key={index}>
                      {rule.regrasCancelamento.map((ruleItem, index) => (
                        <p key={index}>{ruleItem}</p>
                      ))}
                    </li>
                  ))}
                </ul>
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

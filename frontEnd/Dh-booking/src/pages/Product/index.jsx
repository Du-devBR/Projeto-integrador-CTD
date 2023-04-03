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


export function Product(){

  const [openModal, setOpenModal] = useState(false)
  const {id} = useParams()
  const navigate = useNavigate()
  const [coordinates, setCoordinates] = useState([51.505, -0.09]);

  const [dataProduct, setDataProduct] = useState({})
  const [product, setProduct] = useState()
  const [saveData, setSaveData] = useState(false)
  const [shareProduct, setShareProduct] = useState(false)
  const [url, setUrl] = useState('')
  const [copyUrl, setCopyUrl] = useState('')

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

  async function redirectReservation ()  {
    const token = localStorage.getItem("token")
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

  const copyUrlProduct = () => {
    const input = document.getElementById('inputCopy')
    input.select()
    document.execCommand('copy')
    setCopyUrl(input.value)
  }

  const shareInstagram = () => {
    const ur = 'www.google.com.br'
    const img = 'data:image/jpeg;base64,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'
    const link = `https://www.instagram.com/sharer?url=${encodeURIComponent(
      `https://example.com/product/${id}`
    )}&caption=${encodeURIComponent(
      'teste'
    )}&media=${encodeURIComponent(img)}`;

    window.open(link, "_blank")
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
                    <ul>
                    <a  onClick={shareInstagram}>
                      <InstagramLogo size={32} color='#736D6D' alt='Instagram'/>
                    </a>

                    </ul>
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
                <Calender />
              </div>
              <div className='start-reservation'>
                <span>Adicione as data da sua viagem para obter preços exatos.</span>
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

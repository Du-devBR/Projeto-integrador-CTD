import './style.sass'
import {ArrowUUpLeft, ShareNetwork, Heart, MapPin} from 'phosphor-react'
import './responsive.sass'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { ModalProduto } from '../../components/ModalProduto'
import { product } from '../../assets/js-mock/products'

export function Product(){

  const [openModal, setOpenModal] = useState(false)
  const {id} = useParams()

  console.log(id)

  console.log(openModal)

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
                <button className='button-view-location-map'>ver no mapa</button>
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

import './style.sass'
import {ArrowUUpLeft, ShareNetwork, Heart, MapPin} from 'phosphor-react'
import './responsive.sass'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ModalProduto } from '../../components/ModalProduto'
export function Product(){

  const [openModal, setOpenModal] = useState(false)
  console.log(openModal)

  return(
    <div className={!openModal ? "container-product-detail": "container-open-modal"}>
      {
        !openModal ?
        (
        <>
          <div className="header-product-detail">
            <div className="title-product-detail">
              <span>Hotel</span>
              <h1>Hotel brasil</h1>
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
                <span>Jalan Pantai Nusa Dua, 123</span>
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
            <img className='principal-picture-view' src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="carousel-picture">
              <img className='first-img' src="https://images.unsplash.com/photo-1550328927-3b33885318fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJlZCUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              <img className='second-img' src="https://images.unsplash.com/photo-1584574985243-44c6422969bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              <img className='third-img' src="https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBzY2luYSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              <img className='fourth-img' src="https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhdGhyb29tJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
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
              onCloseModal={() => setOpenModal(false)}
            />
          )
      }
    </div>
  )
}

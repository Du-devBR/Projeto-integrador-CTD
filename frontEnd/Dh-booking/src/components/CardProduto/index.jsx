import './style.sass'
import './responsive.sass'
import { Link } from 'react-router-dom'

export function CardProduct(props){
  return(
    <div className='card-product'>
      <img src={props.data.img} alt="" />
      <div className="content-product">
        <div className="header-product">
          <div className="info-product">
            <span className='category-product'>{props.data.category}</span>
            <h1 className='name-product'>{props.data.title}</h1>
          </div>
          <div className="reputation-product">
            <div className='rating-scale-product'>
              <span>8</span>
            </div>
            <span className='name-rating-product'>Muito bom</span>
          </div>
        </div>
        <div className="location-product">
          <span>{`${props.data.location} - `}</span>
          <button className='btn-location-map'>Mostrar no mapa</button>
        </div>
        <div className="description-product">
          <p>{props.data.description}</p>
          <button className='btn-view-more-description'>...mais</button>
        </div>
        <Link to={`/api/produto/${props.data.id}`} className='btn-view-more-product'>Ver mais</Link>
      </div>
    </div>
  )
}

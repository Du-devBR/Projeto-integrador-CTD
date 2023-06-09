import './style.sass'
import './responsive.sass'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export function ModalProduto(props){

  console.log(props)

  return(
    <div className="container-modal">
      <Carousel>
        {
          props.data.map(pictures => (
            <div>
              <img src={pictures.url} alt="" />
            </div>
          ))
        }
      </Carousel>
      <button
        className='btn-close-modal'
        onClick={() => props.onCloseModal()}
        >
          X
      </button>
    </div>
  )
}

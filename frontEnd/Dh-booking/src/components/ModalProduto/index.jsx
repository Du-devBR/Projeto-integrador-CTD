import './style.sass'
import './responsive.sass'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export function ModalProduto(props){
  return(
    <div className="container-modal">
      <Carousel>
        <div>
          <img className='first-img' src="https://images.unsplash.com/photo-1550328927-3b33885318fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJlZCUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div>
          <img className='second-img' src="https://images.unsplash.com/photo-1584574985243-44c6422969bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div>
          <img className='fourth-img' src="https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhdGhyb29tJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div>
          <img className='third-img' src="https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBzY2luYSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
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

import { useEffect, useState } from 'react'
import './style.sass'

export function CardCategoria(props){

  const [imgUrl, setImgUrl] = useState('')

  useEffect(() => {
    fetch(`http://localhost:8080/api/imagem/${props.data.imageID}`)
    .then(res => {
      res.json()
      .then(data => {
        setImgUrl(data.url)
      })
    })
  }, [props.imageID])
  
  return(
    <div className="card-category" onClick={() => props.onSelectCategory(props.data.name)}>
      <img src={imgUrl} alt="" />
      <div className="content-category">
        <p>{props.data.name}</p>
        {/* <span>{`${props.data.qtd} ${props.data.descripition}`}</span> */}
      </div>
    </div>
  )
}



//consumido api

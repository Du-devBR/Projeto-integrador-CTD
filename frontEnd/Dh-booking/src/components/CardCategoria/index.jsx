import './style.sass'

export function CardCategoria(props){
  return(
    <div className="card-category">
      <img src={props.data.img} alt="" />
      <div className="content-category">
        <p>{props.data.descripition}</p>
        <span>{`${props.data.qtd} ${props.data.descripition}`}</span>
      </div>
    </div>
  )
}

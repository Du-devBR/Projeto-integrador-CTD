import './style.sass'

export function SelectLocation(props){
  return(
    <ul>
      <li className='location-item' onClick={() => props.onSelectDestination(`${props.data.name}`)}>
        <div className="location-content">
          <span className='name-city'>{props.data.name}</span>
          <span className='name-country'>{props.data.country}</span>
        </div>
      </li>
    </ul>
  )
}

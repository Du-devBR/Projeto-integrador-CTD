import './style.sass'

export function SelectLocation(props){
  return(
    <ul>
      <li className='location-item' onClick={() => props.onSelectDestination(props.data)}>
        <div className="location-content">
          <span className='name-city'>{props.data.city}</span>
          <span className='name-country'>{props.data.country}</span>
        </div>
      </li>
    </ul>
  )
}

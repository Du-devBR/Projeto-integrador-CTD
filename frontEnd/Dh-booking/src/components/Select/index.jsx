import './style.sass'

export function SelectLocation(props){
  return(
    <ul className='location-list'>
      <li className='location-item'>
        <span>{props.data.city}</span>
        <span>{props.data.country}</span>
      </li>
    </ul>
  )
}

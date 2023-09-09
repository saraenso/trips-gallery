import React from 'react'
import './TripCard.css'

function TripCard(props) {
  const transports = []
  if (props.isPlane) {
    transports.push(props.plane);
  }
  if (props.isBus) {
    transports.push(props.bus);
  }
  if (props.isFerry) {
    transports.push(props.ferry);
  }

  let transportString = transports.join(' + ');
  
  return (
      <li className='trip-card'>
        <img className='trip-image' src={props.image} alt={props.city} />
        <ul className="condition-wrapper">
          { transportString && (<li className='condition'>
            <p className='string'>{transportString}</p>
            </li>)}
          { props.isPeople && (<li className='people'>
              <p className='string'>{props.people}</p>
              <img src={props.peopleIcon} alt="people icon" />
          </li>)}
        </ul>
        <p className='trip-desc'>{props.city}, {props.month} — {props.price}</p>
      </li>
  )
}

export default TripCard
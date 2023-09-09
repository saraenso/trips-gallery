import React from 'react'
import Heading from '../Heading/Heading'
import TripCard from '../TripCard/TripCard'
import tbilisi from '../../assets/tbilisi.jpg'
import istanbul from '../../assets/istanbul.jpg'
import dubai from '../../assets/dubai.jpg'
import phuket from '../../assets/phuket.jpg'
import peopleIcon from '../../assets/people-icon.png'
import './TripsSection.css'

const trips = [
  {
    id: 1,
    image: tbilisi,
    isPlane: false,
    isBus: true,
    bus: 'НА АВТОБУСЕ',
    isFerry: false,
    isPeople: true,
    people: 10,
    peopleIcon: peopleIcon,
    city: 'Тбилиси',
    month: 'апрель',
    price: '83.000',
  },
  {
    id: 2,
    image: istanbul,
    isPlane: true,
    plane: 'НА САМОЛЕТЕ',
    isBus: false,
    isFerry: false,
    isPeople: false,
    city: 'Стамбул',
    month: 'март',
    price: '110.000',
  },
  {
    id: 3,
    image: dubai,
    isPlane: true,
    plane: 'НА САМОЛЕТЕ',
    isBus: false,
    isFerry: false,
    isPeople: true,
    people: 15,
    peopleIcon: peopleIcon,
    city: 'Дубай',
    month: 'июнь',
    price: '220.000',
  },
  {
    id: 4,
    image: phuket,
    isPlane: true,
    plane: 'САМОЛЕТ',
    isBus: false,
    isFerry: true,
    ferry: 'ПАРОМ',
    isPeople: false,
    city: 'Пхукет',
    month: 'сентябрь',
    price: '135.000',
  },
]

function TripsSection() {
  return (
    <section className='trips-section'>
      <Heading 
      text='Галерея путешествий' />
      <ul className="trip-cards">
      { trips.map(trip => (
            <TripCard
            key={trip.id}
            image={trip.image}
            isPlane={trip.isPlane}
            plane={trip.plane}
            isBus={trip.isBus}
            bus={trip.bus}
            isFerry={trip.isFerry}
            ferry={trip.ferry}
            isPeople={trip.isPeople}
            people={trip.people}
            peopleIcon={trip.peopleIcon}
            city={trip.city}
            month={trip.month}
            price={trip.price} />
      )) }
      </ul>
    </section>
  )
}

export default TripsSection

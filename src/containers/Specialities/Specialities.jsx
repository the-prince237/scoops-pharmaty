import React from 'react'
import { SpecWrapper } from './specStyle.js'
import { specialities } from '../../utils/constants'
//import { GiLoveInjection } from 'react-icons/all'
import { Speciality } from '../../components'

const Specialities = () => {

  const [choosenSpec, setChooseSpec] = (specialities[0])

  return (
    <SpecWrapper className='section__margin'>
      <h1 className="title2">Nos Spécialités</h1>
      <p className='text1'>Il est une solution pour tout, même pour les situations les plus difficiles à surpasser ! <br /><b>Nous savons quelle est la voie à suivre !</b></p>
      <div className="specialities">
        {specialities.map((speciality, index) => (
          <Speciality key={index} speciality={speciality} />
        ))}
      </div>
    </SpecWrapper>
  )
}

export default Specialities
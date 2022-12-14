import React from 'react'
import { HeroWrapper } from './heroStyle'

const Hero = () => {
  return (
    <HeroWrapper id='hero' className='section__margin'>
      <div>
        <h1 className='title1 gradient__text'>Soigner Le Monde Ensemble</h1>
        <p className="text1">Nous oeuvrons tous les jours pour une Afrique et un Monde meilleur.</p>
        <div className='hero-buttons'>
          <span className='button'>Contacez nous</span><span className='button'>Consultez</span>
        </div>
      </div>
      <div className='hero-img'>
        <img src="/images/heroImage.png" alt="" />
      </div>
    </HeroWrapper>
  )
}

export default Hero

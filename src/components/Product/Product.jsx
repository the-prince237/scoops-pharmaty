import React from 'react'
import { ProductBody, ProductFooter, ProductHeader, ProductImage, ProductTypes, ProductWrapper, ToTreats } from './productStyle';
import { BsInfo, FaDisease, CgComponents } from 'react-icons/all'

const Product = ({product}) => {

  const {name, picture, description, composition, toTreat, types} = product;

  return (
    <ProductWrapper className='section__margin'>
      <ProductImage>
        {picture}
      </ProductImage>
      <ProductHeader>
        <h1>{name}</h1>
        <ProductTypes>{types.map((type, index) => (<span key={index}>{type}</span>))}</ProductTypes>
      </ProductHeader>
      <ProductBody>
        <div className='description'>
          <div className='icon'><BsInfo  /></div>
          <p>{description}</p>
        </div>
      </ProductBody>
      <ToTreats>
        <div className="icon"><FaDisease /></div>
        <div className="items">
          {toTreat.map((tt, index) => (<span key={index}>{tt}</span>))}
        </div>
      </ToTreats>
      <ProductFooter>
        <h3><CgComponents /><span>Composition</span></h3>
        <div className="items">
          {composition.map((item, index) => (<span key={index}>{item}</span>))}
        </div>
      </ProductFooter>
    </ProductWrapper>
  )
}

export default Product
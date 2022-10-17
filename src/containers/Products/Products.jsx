import React from 'react'
import Product from '../../components/Product/Product'
import { products } from '../../utils/constants'
import { ProductsWrapper } from './style'

const Products = () => {
  return (
    <ProductsWrapper className='section__margin'>
      <h1 className="title2">Nos Produits Fars</h1>
      <p className="text2">Nos produits rassemblent les meilleurs ressources que vous trouverez. Vous les connaissez bien, vous pouvez leur faire confiance !</p>
      {
        products.map((prod, index) => 
          <Product key={index} product={prod} />
        )
      }
    </ProductsWrapper>
  )
}

export default Products
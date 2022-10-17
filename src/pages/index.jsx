import * as React from "react"
import '../utils/GlobalStyle.css'
import { Footer, Header, Hero, Mission, Products, Specialities, Testimonials } from '../containers'

const IndexPage = () => {
  return (
    <main>
      <div className="deco" />
      <Header />
      <Hero />
      <Mission />
      <Specialities />
      <Products />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default IndexPage
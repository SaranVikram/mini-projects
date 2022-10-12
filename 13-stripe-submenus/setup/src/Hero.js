import React from "react"
import phoneImg from "./images/phone.svg"
import { useGlobalContext } from "./context"

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments for the internet</h1>
          <p>milions of transactions with light fast results</p>
          <button className="btn">start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  )
}

export default Hero

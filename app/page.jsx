"use client"

import './page.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Nav from './Nav'

export default function Home() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Nav />
      <main className="main">
        <div className='filter__prod'>
          <p className='filter__p'>Clothes</p>
        </div>
        <div className='products__wp'>
          {loading ? <h1 className="loading">Loading...</h1> :
            products.map((product) => (
              <div className="product__card" key={product.id}>
                <img src={product.images} width="200" alt="" />
                <h4>{product.title}</h4>
                <p>{product.price}</p>
              </div>
            ))}
        </div>
      </main>
    </>
  )
}

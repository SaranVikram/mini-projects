import React from "react"
import Loading from "../components/Loading"
import { useParams, Link } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [drink, setDrink] = useState({})
  const fetchData = async () => {
    try {
      const resp = await fetch(`${url}${id}`)
      const data = await resp.json()
      const { drinks } = data
      const singleDrink = {
        id: drinks[0].idDrink,
        name: drinks[0].strDrink,
        image: drinks[0].strDrinkThumb,
        glass: drinks[0].strGlass,
        preparation: drinks[0].strInstructions,
      }
      setDrink(singleDrink)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  if (loading) {
    return <Loading />
  }

  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={drink.image} alt={drink.name} />
      </div>
      <div className="cocktail-footer">
        <h3>{drink.name}</h3>
        <h4>{drink.glass}</h4>
        <p>{drink.preparation}</p>
      </div>
    </article>
  )
}

export default SingleCocktail

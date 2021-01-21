import React from "react";
import {useParams} from 'react-router-dom'

export default function SingleCocktail(props) {
  const {id} = useParams()
  return <h1>single cocktail page {id}</h1>;
}

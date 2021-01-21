import React from "react";
import Cocktail from "./Cocktail";

export default function CocktailList({ cocktails, loading }) {
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (cocktails.length === 0) {
    return (
      <h2 className="section-title">No Cocktails matched your search term</h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => (
          <Cocktail key={item.id} {...item}></Cocktail>
        ))}
      </div>
    </section>
  );
}

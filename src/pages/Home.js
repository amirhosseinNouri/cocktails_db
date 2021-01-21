import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("a");
  const [cocktails, setCocktails] = React.useState([]);

  React.useEffect(async () => {
    const data = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    setCocktails(data.data.drinks)
  }, [searchTerm]);
  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm}></SearchForm>
      <CocktailList cocktails={cocktails} loading={loading}></CocktailList>
    </main>
  );
}

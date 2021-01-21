import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("a");
  const [cocktails, setCocktails] = React.useState();
  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm}></SearchForm>
      <CocktailList cocktails={cocktails} loading={loading}></CocktailList>
    </main>
  );
}

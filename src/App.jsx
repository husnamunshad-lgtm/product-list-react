
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterSort from "./components/FilterSort";
import ProductList from "./components/ProductList";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  return (
    <div>
      <Navbar />

      <h1>Product List</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <FilterSort
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      <ProductList
        search={search}
        category={category}
        sort={sort}
      />
    </div>
  );
}

export default App;


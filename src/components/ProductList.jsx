
import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList({ search, category, sort }) {
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (sort === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating-high") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;



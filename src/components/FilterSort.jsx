
function FilterSort({
  category,
  setCategory,
  sort,
  setSort,
}) {
  return (
    <div className="filter-sort">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Home">Home</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating-high">Rating: High to Low</option>
      </select>
    </div>
  );
}

export default FilterSort;


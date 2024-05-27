import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CategoryList({ categories }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <Link to={`/categories/${category.id}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CategoryList;

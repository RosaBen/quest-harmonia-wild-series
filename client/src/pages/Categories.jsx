import { useLoaderData } from "react-router-dom";

import CategoryList from "../components/CategoryList";
import CategoryForm from "../components/CategoryForm";

function Categories() {
  const categories = useLoaderData();

  return (
    <>
      <h1>Catégories</h1>
      <CategoryForm />
      <CategoryList categories={categories} />
    </>
  );
}

export default Categories;

import { Link, useLoaderData } from "react-router-dom";

import ProgramList from "../components/ProgramList";

function CategoryDetails() {
  const category = useLoaderData();

  return (
    <>
      <h1>{category.name}</h1>
      <Link to={`/categories/${category.id}/edit`}>Modifier</Link>
      <ProgramList programs={category.programs} />
    </>
  );
}

export default CategoryDetails;

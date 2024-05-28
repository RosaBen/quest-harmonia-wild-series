import { Form, useLoaderData } from "react-router-dom";

function CategoryEdit() {
  const loaderData = useLoaderData();

  return (
    <>
      <Form method="put">
        <input
          type="text"
          name="name"
          defaultValue={loaderData.name}
          aria-label="nom"
        />
        <button type="submit">
          Modifier <span aria-hidden="true">✒️</span>
        </button>
      </Form>

      <Form method="delete">
        <button type="submit">
          Supprimer <span aria-hidden="true">🗑️</span>
        </button>
      </Form>
    </>
  );
}

export default CategoryEdit;

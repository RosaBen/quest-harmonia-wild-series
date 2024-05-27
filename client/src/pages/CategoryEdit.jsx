import { Form, useLoaderData } from "react-router-dom";

function CategoryEdit() {
  const loaderData = useLoaderData();

  return (
    <>
      <Form method="put" style={{ display: "inline-block" }}>
        <input type="text" name="name" defaultValue={loaderData.name} />
        <button type="submit">✒️</button>
      </Form>

      <Form method="delete" style={{ display: "inline-block" }}>
        <button type="submit">🗑️</button>
      </Form>
    </>
  );
}

export default CategoryEdit;

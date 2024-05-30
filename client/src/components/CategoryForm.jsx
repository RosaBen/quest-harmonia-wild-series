import { Form } from "react-router-dom";

function CategoryForm() {
  return (
    <Form method="post">
      <label htmlFor="name">Nouvelle catégorie</label>{" "}
      <input type="text" id="name" name="name" />
      <button type="submit">Ajouter</button>
    </Form>
  );
}

export default CategoryForm;

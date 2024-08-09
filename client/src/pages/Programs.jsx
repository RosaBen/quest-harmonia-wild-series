
import { useLoaderData } from "react-router-dom";
// import ProgramList from "../components/ProgramList";

function Programs() {
    const programs = useLoaderData();
    return (
        <>
        <h1>Programs</h1>
        <div className="program_container_list">
            {programs.length >0 ?
            programs.map((program)=>(
                <div key={program.id} className="program_card">
                    <h2>{program.title}</h2>
                    <p>{program.synopsis}</p>
                    <img src={program.poster} alt ={program.title} />
                    <p>{program.country}</p>
                    <p>{program.year}</p>
                    <p>{program.name}</p>
                </div>
            )):
            (<h2>Page en construction</h2>)}
        </div>
        </>
    );
}

export default Programs;

















// import { useLoaderData } from "react-router-dom";

// import CategoryList from "../components/CategoryList";
// import CategoryForm from "../components/CategoryForm";

// function Categories() {
//   const categories = useLoaderData();

//   return (
//     <>
//       <h1>Catégories</h1>
//       <CategoryForm />
//       <CategoryList categories={categories} />
//     </>
//   );
// }

// export default Categories;

import { useLoaderData } from "react-router-dom";

// import ProgramList from "../components/ProgramList";

function ProgramDetails() {
  const program = useLoaderData();

  return (
    <>
      <h1>{program.title}</h1>
      <p>{program.synopsis}</p>
      <img src={program.poster} alt={program.title} />
      <p>{program.country}</p>
      <p>{program.year}</p>
      <p>{program.genre}</p>
    </>
  );
}

export default ProgramDetails;

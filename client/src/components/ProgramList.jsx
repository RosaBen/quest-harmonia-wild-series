import PropTypes from "prop-types";

function ProgramList({ programs }) {
  return (
    <ul>
      {programs.map((program) => (
        <li key={program.id}>{program.title}</li>
      ))}
    </ul>
  );
}

ProgramList.propTypes = {
  programs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProgramList;

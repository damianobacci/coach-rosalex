import "./Concepts.css";

function Concept(props) {
  return (
    <li className="concept">
      <img src={props.srcImage} alt={props.altText} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

export default Concept;

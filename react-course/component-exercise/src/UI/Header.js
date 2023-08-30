import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <img src={props.srcImage} alt={props.altText} />
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}

export default Header;

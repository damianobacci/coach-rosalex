import "./Header.css";

function Header(props) {
  return (
    <header>
      <img src={props.srcImage} alt={props.altText} />
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </header>
  );
}

export default Header;

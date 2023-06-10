import "./style.css";

const Tag = ({ str, knows }) => {
  return <span className={`tag ${knows ? "knows" : "doesntKnow"}`}>{str}</span>;
};

export default Tag;

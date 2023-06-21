import PropTypes from "prop-types";
import { useState } from "react";
import "./styles.css";

TextExpander.propTypes = {
  collapsedNumWords: PropTypes.number,
  className: PropTypes.string,
  expanded: PropTypes.bool,
  buttonColor: PropTypes.string,
  buttonBgColor: PropTypes.string,
  boxStyle: PropTypes.object,
};

function TextExpander({
  children,
  className = "",
  collapsedNumWords = 8,
  expanded = false,
  expandButtonText = " More",
  collapseButtonText = " Less",
  buttonStyle = {
    color: "red",
    backgroundColor: "#f7f7f700",
    border: "0",
    margin: "0 5px",
  },
  boxStyle = {},
}) {
  // childDirectio;
  const [isExpanded, setExpand] = useState(expanded);

  return (
    <div className="box" style={boxStyle}>
      {isExpanded
        ? children
        : children.split(" ", collapsedNumWords).join(" ") + "..."}
      {/* children.split(" ").slice(0, collapsedNumWords).join(" ") + */}
      <button style={buttonStyle} onClick={() => setExpand(!isExpanded)}>
        {isExpanded ? collapseButtonText : expandButtonText}{" "}
      </button>
    </div>
  );
  // split equivalent in php is explode and join's is implode
}
export default TextExpander;

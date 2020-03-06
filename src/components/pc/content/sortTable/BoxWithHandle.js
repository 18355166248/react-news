import React from "react";
import { useDrag } from "react-dnd";
import ItemTypes from "./ItemTypes";
const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  width: "20rem"
};
const handleStyle = {
  backgroundColor: "green",
  width: "1rem",
  height: "1rem",
  display: "inline-block",
  marginRight: "0.75rem",
  cursor: "move"
};
function BoxWithHandle() {
  const [{ opacity }, drag, preview] = useDrag({
    item: { type: ItemTypes.BOX },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });
  return (
    <div ref={preview} style={{ ...style, opacity }}>
      <div ref={drag} style={handleStyle} />
      通过按钮拖拽
    </div>
  );
}
export default BoxWithHandle;

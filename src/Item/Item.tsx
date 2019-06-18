import React from "react";
import "./Item.css";

const Item = (props: { label: string; important: boolean; done: boolean }) => {
  const { label, important, done } = props;

  const className = done ? "done" : "";

  const style: React.CSSProperties = {
    fontWeight: important ? 600 : 100
  };

  return (
    <div style={style} className={className}>
      <input type="checkbox" checked={done} />
      {label}
      <button className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash" />
      </button>
      <button className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation-triangle" />
      </button>
    </div>
  );
};

export default Item;

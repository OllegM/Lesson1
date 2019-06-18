import React from "react";
import { IData } from "../Interfaces/IData";
import Item from "../Item";
import "./ItemList.css";

const ItemList = (props: { toDo: IData[] }) => {
  const elements = props.toDo.map(x => {
    const { id } = x;
    return (
      <li key={id} className="list-group-item">
        <Item {...x} />
      </li>
    );
  });

  return <ul className="list-group">{elements}</ul>;
};

export default ItemList;

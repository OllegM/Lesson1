import React from "react";
import ItemList from "../ItemList";
import { IData } from "../Interfaces/IData";

const App = (props: { toDo: IData[] }) => {
  return (
    <div>
      <ItemList {...props} />
    </div>
  );
};

export default App;


import {  Input } from "antd";
import { FC } from "react";
import "./App.css";
import Todo from "./Todo";

const App: FC = () => {
  const { Search } = Input;
  return (
    <div className="App">
      <div className="todos-list">
        <div className="todos-list__header">Todos (5)</div>
        <div className="todos-list__container">
          <div className="todos-list__add-todo">
            <Search className="todos-list__search"  placeholder="Enter todo here"
              enterButton="Submit" onSearch={()=>{}}
            />
          </div>
          <div className="todos">
            <Todo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

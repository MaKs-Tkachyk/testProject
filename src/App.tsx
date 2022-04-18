import { FC } from "react";
import "./App.css";
import Search from "./Elements/Search";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import Todo from "./Elements/Todo";
import { todoListType, todoSlice } from "./Redux/todoSlice";



const App: FC = () => {


  const {todoList} = useAppSelector(state=>state.todoSlice)
  const dispatch = useAppDispatch()
  const {pushNewTodo}=todoSlice.actions
  
  const push = ({id,title,isChecked}:todoListType)=>{
     dispatch(pushNewTodo({id:new Date().getTime(),title,isChecked}))
  }


  return (
    <div className="App">
      <div className="todos-list">
        <div className="todos-list__header">Todos (5)</div>
        <div className="todos-list__container">
          <div className="todos-list__add-todo">
            <Search onClick={push}/>
          </div>
          <div className="todos">
          { todoList.map(elem=><Todo key={elem.id} {...elem} />) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import  { FC, useState } from "react";
import "../App.css";
import { useAppDispatch } from "../hooks/redux";
import { todoListType, todoSlice } from "../Redux/todoSlice";
import Search from "./Search";


type todoType = {
        id:number,
        title:string,
        isChecked:boolean,

}


const Todo: FC<todoType> = ({id,title,isChecked}) => {
  
   const dispatch = useAppDispatch()
   const {deleteTodo,updateTodoList}=todoSlice.actions

   const [update,setUpdate] = useState<boolean>(false)
   const [check ,setCheck] = useState<boolean>(isChecked)

   const updateTodo = ({title,isChecked}:todoListType)=>{
    dispatch(updateTodoList({id:id,title,isChecked}))
    setUpdate(false)
  }


  return (
           <div className="todo">
       { update === true 
          ?<Search valueTitle={title} onClick={updateTodo}/>  
          : <> <Checkbox className="Checkbox" checked={check} onClick={()=>{
                updateTodo({id,title,isChecked:check})
                setCheck(pre=>!pre)}}>{title}
               </Checkbox>
              <div className="todo__change">
                <FormOutlined onClick={()=>setUpdate(true)}  className="FormOutlined"/>
                <DeleteOutlined onClick={()=>dispatch(deleteTodo(id))} height="40px"className="DeleteOutlined" />
              </div> </>}
            </div>
  );
};

export default Todo;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type todoListType ={
    id:number
    isChecked:boolean,
    title:string, 
}

interface todoState {
  todoList: todoListType[]
  }
  
  const initialState: todoState = {
    todoList: []
  };


export const todoSlice = createSlice({
    name:"todoSlice",
    initialState,
    reducers:{
     pushNewTodo(state,action:PayloadAction<todoListType>){
        state.todoList = [...state.todoList,action.payload]
     },
     deleteTodo(state,action:PayloadAction<number>){
        state.todoList = state.todoList.filter(elem=>elem.id !== action.payload)
     },
     updateTodoList(state,action:PayloadAction<todoListType>){
         state.todoList.forEach((el,index)=>{
             if(el.id === action.payload.id){
               delete state.todoList[index]
               state.todoList[index] = action.payload
             }
         })
     }
    }
})
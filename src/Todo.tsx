import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import { Checkbox,Input } from "antd";
import React, { FC, useState } from "react";
import "./App.css"



import "./App.css";

const Todo: FC = () => {

   const [update,setUpdate] = useState<boolean>(false)
   const [check,setCheck] = useState<boolean>(false)


   const { Search } = Input;
  return (
           <div className="todo">
{    update == true 
          ?<Search  className="todos-list__search" placeholder="Enter some text"
          enterButton="Update" onSearch={()=>{}}/>
          : <> <Checkbox className="Checkbox" checked={check} onClick={()=>setCheck(pre=>!pre)}>Checkbox</Checkbox>
              <div className="todo__change">
                <FormOutlined onClick={()=>setUpdate(true)}  className="FormOutlined"/>
                <DeleteOutlined height="40px"className="DeleteOutlined" />
              </div> </>}
            </div>
  );
};

export default Todo;

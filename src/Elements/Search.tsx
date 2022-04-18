import { Input } from "antd";
import { FC,useState } from "react";
import "../App.css";
import { todoListType } from "../Redux/todoSlice";


type SearchType = {
   onClick: ({id,title,isChecked}:todoListType)=>void,
   valueTitle?:string
}

const Search: FC<SearchType> = ({onClick,valueTitle}) => {
  const { Search } = Input;

  const [value,setValue] = useState<string>(valueTitle || "")

  return (
    <Search
      className="todos-list__search"
      placeholder="Enter todo here"
      enterButton="Submit"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onSearch={()=>{
          onClick({id:0,title:value,isChecked:false})
          setValue("")
        }}
    />
  );
};

export default Search;

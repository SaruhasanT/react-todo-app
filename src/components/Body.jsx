import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoContainer from "./TodoContainer";
const Body = () => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);
  return (
    <div>
      <div className='input-area'>
        <input
          type='text'
          placeholder='Type here...'
          onInput={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          className='add-btn'
          onClick={(e) => {
            if (inputText !== "") {
              const id = uuidv4();
              setList([...list, { text: inputText, id: id, done: false }]);
              console.log(list);
              e.target.parentNode.children[0].value = "";
              setInputText("");
            }
          }}>
          Add
        </button>
      </div>
      <TodoContainer setList={setList} list={list} />
    </div>
  );
};

export default Body;

import React, {useMemo}from "react";

export default function TodoInput(props) {
    
    const { todoText, onChange, onClick} = props;
    
   return (
    <div className="input-area">
        <input placeholder="TODOを入力" className="contents-input1" value={todoText} onChange={onChange}></input>
        <button onClick={onClick} className="shadow bg-purple-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4">追加</button>
    </div>
    )
}
import React, { useState } from "react";
import Layout from "../../components/Layout";
import Content from "../../components/templates/contents/ContentLayout"
import TodoInput from "../../components/contents/todo/TodoInput";

import { HeaderOnly } from "../../components/templates/HeaderLayOut";
import { ContentsMainArea } from "../../components/templates/contents/ContentsMainArea";
import { ContentsSubArea } from "../../components/templates/contents/ContentsSubArea";

export default function TodoApp() {

    const [todoText, setTodoText] = useState('')
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setcompleteTodos] = useState([]);
    const [histroy, setHistroy] = useState([]);


    const onChangeTodoText = (event) => setTodoText(event.target.value);

    //タスク追加
    const onClickAddTodo = () => {
        //空の場合は追加ダメ
        if(todoText === "") return;

        const updatelist = [...incompleteTodos, todoText];
        //リスト更新
        setIncompleteTodos(updatelist);
        //セット後空セット
        setTodoText("");
    };

    //タスク削除(未完了)
    const onClickDeleteInCompTodo = (index :number) => {
        const updatelist = [...incompleteTodos];
        updatelist.splice(index, 1);
        //リスト更新
        setIncompleteTodos(updatelist);
    };

    //タスク削除(完了)
    const onClickDeleteCompTodo = (index :number) => {
        const updatelist = [...completeTodos];

        //履歴追加
        addHistroy(updatelist[index]);

        updatelist.splice(index, 1);
        //リスト更新
        setcompleteTodos(updatelist);
    };
    
    //履歴追加
    const addHistroy = (content :string) => {
        const updatelist = [...histroy];
        const maxSize = 10;
        updatelist.unshift(content);

        if(updatelist.length > maxSize){
            updatelist.pop();
        }
        //リスト更新
        setHistroy(updatelist);
    };

    //タスク完了
    const onClickCompleteTodo = (index :number) => {

        //完了リストに追加
        const updateCompletelist = [...completeTodos, incompleteTodos[index]];
        setcompleteTodos(updateCompletelist);

        //タスクリストから削除
        const updateInCompletelist = [...incompleteTodos];
        updateInCompletelist.splice(index, 1);
        setIncompleteTodos(updateInCompletelist);
    };

    //タスク戻す
    const onClickBackTodo = (index :number) => {

        //タスクリストに追加
        const updateInCompletelist = [...incompleteTodos, completeTodos[index]];
        setIncompleteTodos(updateInCompletelist);

        //完了リストから削除
        const updateCompletelist = [...completeTodos];
        updateCompletelist.splice(index, 1);
        setcompleteTodos(updateCompletelist);
    };
    
    return (
    <>
      <Layout title="Todo" key={1}>
      <HeaderOnly key={2}/>
        <Content  key={3}>
          <ContentsMainArea key={4}>
            <h1 className="contents-h1">Todoアプリ</h1>
            
            <TodoInput todoText={todoText} onChange={onChangeTodoText} onClick={onClickAddTodo} key={5}/>

            <div className="incomplete-area">
                <h2 className="contents-h2">未完了のTODO</h2>
                <ul>
                    {incompleteTodos.map((todo, index) =>{
                        return (
                            <div key={todo} className="list-row">
                                <li className="list-item">{todo}</li>
                                <button onClick={() => onClickCompleteTodo(index)} className="shadow bg-purple-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-2">完了</button>
                                <button onClick={() => onClickDeleteInCompTodo(index)} className="shadow bg-purple-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-2">削除</button>
                            </div>                            
                        )
                        })
                    }
                </ul>
            </div>
            
            <div className="complete-area">
                <h2 className="contents-h2">完了のTODO</h2>
                <ul>
                    {completeTodos.map((todo, index) =>{
                        return (
                            <div className="list-row">
                                <li className="list-item">{todo}</li>
                                <button onClick={() => onClickBackTodo(index)} className="shadow bg-purple-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-2">戻す</button>
                                <button onClick={() => onClickDeleteCompTodo(index)} className="shadow bg-purple-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-2">削除</button>
                            </div>
                        )
                    })
                    }
                </ul>
            </div>
          </ContentsMainArea>
          <ContentsSubArea  key={5}>
            <h2 className="contents-h2">履歴</h2>
            <ul>
                {histroy.map((todo) =>{
                    return (
                        <div key={todo} className="list-row">
                            <li className="list-item">{todo}</li>
                        </div>                            
                    )
                    })
                }
            </ul>
          </ContentsSubArea>
        </Content>
      </Layout>
    </>
  )
}

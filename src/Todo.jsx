import "./index.css";
import React,{useState} from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const Todo=() => {
  //todoText→上の入力のテキスト　setTodoText→セットしたtodo useState→状態管理の関数
  const [todoText,setTodoText]=useState("");
  const [incompleteTodos,setIncompleteTodos] = useState ([
  ]);
  const [completeTodos,setCompleteTodos] = useState ([
  ]);

  //todoTextで入力したtodoの内容をsetTodoTextに移行する。
  const onChangeTodoText=(event)=>setTodoText(event.target.value);
    //追加ボタンを押したときの処理。
    const onClickAdd=()=>{
    //todoの入力が空の時はreturnする。
    if(todoText==="") return;
    const newTodos=[...incompleteTodos,todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
    };
  //削除ボタン
  const onClickDelete=(index)=>{
    const newTodos= [...incompleteTodos];
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos);
  };
  
  const onClickComplete=(index)=>{
    const newIncompleteTodos= [...incompleteTodos];
    newIncompleteTodos.splice(index,1);

    const newCompleteTodos=[...completeTodos,incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);

  };

    const onClickBack=(index)=>{
      const newCompleteTodos=[...completeTodos];
      newCompleteTodos.splice(index,1);

      const newIncompleteTodos=[...incompleteTodos,completeTodos[index]];
      setCompleteTodos(newCompleteTodos);
      setIncompleteTodos(newIncompleteTodos);
    };


  const isMaxLimitIncompleteTodos=incompleteTodos.length>=5;
  
  return(
  <>
   <InputTodo 
    todoText={todoText} 
    onChange={onChangeTodoText} 
    onClick={onClickAdd}
    disabled={isMaxLimitIncompleteTodos }
   />
   {isMaxLimitIncompleteTodos && (
   <p style={{color:"red"}}>
    登録できるtodoは5個までです。</p>
    )}
   <IncompleteTodos
   todos={incompleteTodos} 
   onClickComplete={onClickComplete}
   onClickDelete={onClickDelete}
   />
   <CompleteTodos todos ={completeTodos}
   onClickBack={onClickBack}
   />
  </>
  );
};

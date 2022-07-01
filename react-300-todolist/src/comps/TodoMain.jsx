import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import moment from "moment";

const TodoMain = () => {
  const [todoList, setTodoList] = useState([]);

  const insert_todo = (e) => {
    const todo = {
      t_id: "",
      t_s_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
      t_e_date: "",
      item: e,
    };
    const todoBody = [...todoList, todo];
    setTodoList(todoBody);
  };
  return (
    <div className="w3-container w3-margin">
      <TodoInput insert_todo={insert_todo} />
      <TodoList todoList={todoList} />
    </div>
  );
};
export default TodoMain;

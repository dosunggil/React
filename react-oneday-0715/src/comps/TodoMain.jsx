import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import uuid from "react-uuid";

const TodoMain = () => {
  const [todoList, setTodoList] = useState(() => {
    const todoBody = JSON.parse(localStorage.getItem("TODOLIST"));
    if (todoBody) return todoBody;
    else return [];
  });

  useEffect(() => {
    localStorage.setItem("TODOLIST", JSON.stringify(todoList));
  }, [todoList]);

  const insert_todo = (e) => {
    const todo = {
      t_id: uuid(),
      t_item: e,
      t_flag: "",
    };
    const todoBody = [...todoList, todo];
    setTodoList(todoBody);
  };

  const todo_done = (id) => {
    const todoBody = todoList.map((todo) => {
      if (todo.t_id === id) {
        const flag = todo.t_flag ? "" : "done";
        return { ...todo, t_flag: flag };
      }
      return todo;
    });
    setTodoList(todoBody);
  };
  const todo_delete = (e) => {
    const todoRemoveList = todoList.filter((todo) => {
      return todo.t_id !== e;
    });
    setTodoList(todoRemoveList);
  };
  return (
    <>
      <TodoInput insert_todo={insert_todo} />

      <TodoList
        todo_done={todo_done}
        todo_delete={todo_delete}
        todoList={todoList}
      />
    </>
  );
};

export default TodoMain;

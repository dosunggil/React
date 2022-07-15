const TodoList = (props) => {
  const { todoList, todo_delete, todo_done } = props;

  const _tempTodoList = todoList.map((todo) => {
    return (
      <>
        <li
          className={todo.t_flag ? "done" : ""}
          onClick={() => todo_done(todo.t_id)}
        >
          {todo.t_item}
        </li>
        <span onClick={() => todo_delete(todo.t_id)}>&times;</span>
      </>
    );
  });

  return <ul> {_tempTodoList}</ul>;
};

export default TodoList;

const TodoInput = (props) => {
  const { insert_todo } = props;

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const todo = e.target.value;

      insert_todo(todo);
      e.target.value = "";
    }
  };
  return (
    <input onKeyDown={onKeyDown} placeholder="오늘의 할 일 :: 입력 후 ENTER" />
  );
};

export default TodoInput;

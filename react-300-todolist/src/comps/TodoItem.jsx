const TodoItem = (props) => {
  const { item } = props;
  return (
    <tr>
      <td>{item.item}</td>
      <td>{item.t_s_date}</td>
    </tr>
  );
};

export default TodoItem;

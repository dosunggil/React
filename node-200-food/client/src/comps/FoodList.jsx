const FoodList = ({ foodList }) => {
  const FoodBody = foodList.map((food) => {
    return (
      <tr>
        <td> {food.f_date}</td>
        <td> {food.f_name}</td>
        <td> {food.f_num}</td>
        <td> {food.f_kcal}K</td>
        <td> {food.f_num * food.f_kcal}K</td>
      </tr>
    );
  });
  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
          <td>날짜</td>
          <td>식품명</td>
          <td>섭취량</td>
          <td>칼로리</td>
          <td>총칼로리</td>
        </tr>
      </thead>
      <tbody>{FoodBody}</tbody>
    </table>
  );
};

export default FoodList;

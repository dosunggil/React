import Sub from "./Sub";
const Main = () => {
  const comp = (
    <div>
      <h1>반갑습니다.</h1>
      <p>리액트를 사용하여 컴포넌트를 만들고있따.</p>
      <p>3 + 4 = {3 + 4}</p>
      <Sub name="대하니만세" />
    </div>
  );
  return comp;
};
export default Main;

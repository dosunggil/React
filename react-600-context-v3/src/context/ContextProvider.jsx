import { createContext, useContext, useState } from "react";
const AppContext = createContext();

// 각각 props 가 필요한 Component 들이
// useContext 를 사용하여 props 들을 분해하던 코드를
// 여기에서 함수로 선언하고 결과를 return 한다.

/*
  Hook 함수
  React 가 처음 탄생할때는 class 를 사용하여 컴포넌트를 만들었다.
  JS class 를 처음 사용하면 기존의 JS 코드의 장점을 많이 활용하기가 다소 어렵다.
  JS class Java 클래스에 비하면 class 만드는데 상당히 복잡한 코드들이 필요하다.
  class 에 method 를 추가하거나, 어떤 변수를 선언할때도 상당히 어려움이 있다.

  React 에서는 class 로 컴포넌트를 제작하는 대신
  함수를 사용하여 컴포넌트를 제작하는 문법을 도입한다.

  useState() : state 변수를 생성하는 함수
  useEffect() : state 변수가 변동될 때
    React 사용자 어떤 코드를 실행하고자 할 때 코드를 작성하는 함수
    화면이 rendering 될 때 fetch 데이터를 가져오거나 할 때
    1. 화면이 최초 rendering 될 때 자동으로 호출되는 함수
    2. state 변수를 지정하여 state 변수가 변화될 때

  Hook 함수는 모두가 use 접두사로 시작
*/

/*
useContext 함수를 대신하는 사용자 정의 Hook 함수
useContext 함수는 어떤 Provider Store 에 저장된 데이터인지를 항상 명시해줘야 한다.
함수를 사용할 때 반드시 무엇인가를 명시해주는 것은 코딩을 하는 입장에서 다소 불편할 수 있다.

그래서 원래 있던 useContext 를 useAppContext 로 재정의하고
사용자는 이제 어떤 Provider 를 사용해야 되는지 걱정하지 않아도 된다.

사용자정의 Hook 만드는 규칙
접두사는 반드시 use 로 시작, 접미사는 만들고자 하는 원래 Hook 의 이름
 */
const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

//Context.Provider 역할을 수행하는 Component
// props.children 속성을 매개변수로 받고 있다
// 이 컴포넌트 내에서 state 들을 선언
// App.js 에서 AppContext.Provider 로 컴포넌트 들을 묶고
// 여기에 value 를 지정한 코드를
// AppContextProvider 라는 객체함수로 선언하기
const AppContextProvider = ({ children }) => {
  // address state 변수가 생성되고
  // address state 변수를 변경시키는 setAddress 함수를 선언
  const [address, setAddress] = useState({
    a_name: "",
    a_tel: "",
    a_address: "",
  });
  const [addrList, setAddrList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  // Store 에 보관하기 위하여 bundling
  // Store 에 보관할 때 개별적인 요소들로 보낼 수 있지만
  // 관리 측면에서 bundling 하는 것이 좋다.
  const props = {
    address,
    setAddress,
    addrList,
    setAddrList,
    isEdit,
    setIsEdit,
  };

  return (
    <>
      <AppContext.Provider value={props}>{children}</AppContext.Provider>
    </>
  );
}; // AppContextProvider() end
export { useAppContext, AppContextProvider };

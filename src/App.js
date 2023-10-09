import "./styles/cau-ui.css";
import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sugang from "./pages/Sugang";
import Home from "./pages/Home";
import Basket from "./pages/Basket";

import { courseList } from "./utils/courses";

const reducer = (oldState, action) => {
  let newState = [];
  switch (action.type) {
    case "BASKET": {
      newState = oldState.map((it) =>
        it.cName === action.name ? { ...it, cType: 1 } : it
      );
      break;
    }
    case "APPLY": {
      newState = oldState.map((it) =>
        it.cName === action.name ? { ...it, cType: 2 } : it
      );
      break;
    }
    default:
      return action.data;
  }
  return newState;
};

export const courseStateContext = React.createContext(); // 과목 데이터 공급
export const courseDispatchContext = React.createContext(); // 수강 관련 함수 공급

function App() {
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courseList)); // 로컬 스토리지 등록(초기화)
  }, []);

  // 과목 데이터
  const [courseData, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("courses")) || []
  );

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courseData));
  }, [courseData]); // courseData를 의존성 배열에 추가

  // 장바구니 담기
  const onBasket = (name) => {
    dispatch({ type: "BASKET", name: name });
  };
  // 수강신청 하기
  const onApply = (name) => {
    dispatch({ type: "APPLY", name: name });
  };

  return (
    <courseStateContext.Provider value={{ courseData: courseData }}>
      <courseDispatchContext.Provider value={{ onBasket, onApply }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/sugang" element={<Sugang />}></Route>
              <Route path="/basket" element={<Basket />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </courseDispatchContext.Provider>
    </courseStateContext.Provider>
  );
}

export default App;

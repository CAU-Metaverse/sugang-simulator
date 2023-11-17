import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sugang.css";
import "../styles/jqgrid.css";

import { incompleteFunctionClick } from "../utils/message";
function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="is-left">
        <div className="btn-menu is-opened" title="메뉴닫기" />
        <img src="images/logo.png" />
        <span className="title">
          <b className="txt-blue">20XX학년도 1학기</b>
        </span>
      </div>
      <div className="is-right">
        <div className="user-name">
          <b>김중앙(20XX1234)</b>
          <span className="split" /> 학년(가진급학년) <em>1(1)</em>
          <span className="split" /> 제한학점 <em>20</em> (기본: 20 / 이월: 0)
        </div>
        <div className="timer">
          <span>30:00</span>
          <button type="button" onClick={incompleteFunctionClick}>
            연장하기
          </button>
        </div>
        <button
          type="button"
          id="btnLogout"
          className="btn-sub btn-md"
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </button>
      </div>
    </div>
  );
}

export default Header;

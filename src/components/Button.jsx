import React from "react";
import "../styles/sugang.css";
import "../styles/jqgrid.css";

function Button({ page, type, text, onClick }) {
  let className = "btn-main btn-sm"; // 기본
  type = parseInt(type);

  // 장바구니 페이지
  if (page === "basket" && (type === 1 || type === 2)) {
    className = "btn-sm btn-done";
    text = "완료";
  }

  // 수강신청
  if (page === "sugang" && type === 2) {
    className = "btn-sm btn-done";
    text = "완료";
  }

  return (
    <button id="btn-add" className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

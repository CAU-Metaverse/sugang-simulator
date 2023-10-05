import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <header className="login">
      <div className="login-container">
        <main>
          <div className="login-left">
            <h1 id="login-title">중앙대학교 모의수강신청</h1>
            <p className="list-dot">
              본 사이트는 CAU-Metaverse에서 제작한 모의 수강신청 사이트 입니다.
              실제 수강신청 페이지가 아니며 연습용으로만 사용해주세요.
            </p>
            <div className="login-box">
              <button
                className="btn-login"
                onClick={() => {
                  navigate("/basket");
                }}
              >
                장바구니 담으러 가기
              </button>
              <button
                className="btn-login"
                onClick={() => {
                  navigate("/sugang");
                }}
              >
                수강신청 하러 가기
              </button>
            </div>
          </div>

          <div className="login-right">
            <div>
              <img src="images/logo_main.png" alt="중앙대학교 로고" />
            </div>
            <div className="login-img">
              <img src="images/img-login.png" alt="수강신청 이미지" />
            </div>
          </div>
        </main>
      </div>

      <footer>
        <div>Copyright 2023 CAU-Metaverse All Rights Reserved.</div>
      </footer>
    </header>
  );
}

export default Home;

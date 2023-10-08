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
              본 사이트는 CAU-Metaverse에서 제작한 중앙대학교 모의 수강신청
              사이트 입니다. 실제 수강신청 페이지와 유사한 환경을 제공하여
              수강신청 절차를 익히고 연습할 수 있는 기회를 제공합니다 😊
            </p>
            <p>
              【이용 순서】
              <br />
              1.{" "}
              <span style={{ color: "navy", marginTop: "5px" }}>
                장바구니 담으러 가기{" "}
              </span>
              를 클릭하여 장바구니 담기를 진행해주세요.
              <br /> 장바구니에 과목이 담겨있지 않으면 수강신청을 진행할 수
              없습니다. 이는 실제 수강신청에서도 적용되는 사항이니 명심하세요!
              <br />
              2.{" "}
              <span style={{ color: "navy", marginTop: "5px" }}>
                수강신청 하러 가기{" "}
              </span>
              를 클릭하여 장바구니에 담은 과목을 직접 신청해보세요.
              <br />
              3. 신청 내역은 수강신청 페이지의{" "}
              <span style={{ color: "navy", marginTop: "5px" }}>
                수강신청내역(취소){"  "}
              </span>
              탭에서 확인할 수 있습니다.
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

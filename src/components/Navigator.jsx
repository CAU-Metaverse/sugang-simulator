import React from "react";
import "../styles/sugang.css";
import "../styles/jqgrid.css";

const Navigator = (props) => {
  return (
    <div className="nav">
      <div className="nav-header">
        <span onclick className="is-active">
          한글
        </span>
        <span onclick className>
          ENG
        </span>
        <span onclick className>
          中文
        </span>
      </div>
      <div className="nav-main">
        <ul className="nav-menu">
          <li className="has-child is-opened">
            <span id="menu_S" className>
              수강신청
            </span>
            <ul style={{ display: "block" }}>
              <li>
                <span onclick id="menu_notice" className>
                  시스템 유의사항
                </span>
              </li>
              <li>
                <span onclick id="menu_sugang" style={{ color: props.sugang }}>
                  수강신청
                </span>
              </li>
              <li>
                <span onclick id="menu_basket" style={{ color: props.basket }}>
                  장바구니
                </span>
              </li>
              <li>
                <span onclick id="menu_lectTime">
                  강의시간표 조회
                </span>
              </li>
              <li>
                <span onclick id="menu_timetable">
                  개인시간표
                </span>
              </li>
              <li>
                <span onclick id="menu_similar">
                  동일대체과목조회
                </span>
              </li>
              <li>
                <span onclick id="menu_faq">
                  수강신청FAQ
                </span>
              </li>
              <li>
                <span onclick id="menu_board">
                  수강신청게시판
                </span>
              </li>
              <li>
                <span onclick id="menu_modify">
                  시간표 변경내역
                </span>
              </li>
              <li>
                <span onclick id="menu_confirm">
                  수강신청확인원
                </span>
              </li>
              <li>
                <span onclick id="menu_remain">
                  강좌별 잔여여석 조회
                </span>
              </li>
              <li>
                <span onclick id="menu_favorite">
                  선호 검색조건 관리
                </span>
              </li>
              {/* <li><span onClick="javascript:fnMenuLoad('/sugang?attribute=sugangConfirm',this.id);" id="menu_confirm">수강신청확인원<b style="font-size:11px;">(Course Registration Confirmation Form)</b></span></li> */}
            </ul>
          </li>
          <li className="has-child is-opened">
            <span id="menu_G">성적조회</span>
            <ul style={{ display: "block" }}>
              <li>
                <span onclick id="menu_gradeListS">
                  계절학기 성적조회
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="nav-footer">
        <button type="button" className="btn-footer" onclick>
          <span>매뉴얼 다운로드 (PC)</span>
          <i className="sw-icon-download" />
        </button>
        <button type="button" className="btn-footer" onclick>
          <span>매뉴얼 다운로드 (모바일)</span>
          <i className="sw-icon-download" />
        </button>
        <div className="copy">
          Copyright 2020 Chung-Ang University.
          <br />
          All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Navigator;

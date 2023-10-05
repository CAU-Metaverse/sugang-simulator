import React, { useState } from "react";

import "../styles/sugang.css";
import "../styles/jqgrid.css";

import Header from "../components/Header";
import Navigator from "../components/Navigator";
import { incompleteFunctionClick } from "../utils/message";

function Basket() {
  /* 탭 이동 */
  const [activeTab, setActiveTab] = useState("tab_01"); // 활성화된 탭의 ID를 저장하는 상태
  const handleTabClick = (tabId) => {
    setActiveTab(tabId); // 클릭한 탭의 ID로 상태 업데이트
  };

  /* 장바구니 조회 */
  const [lctrName, setLctrName] = useState("");
  const [isTableVisible, setIsTableVisible] = useState(false);
  // 조회
  function fnSearch() {
    // 입력된 과목 검사
    var inputValue = lctrName.replace(/\s/g, ""); // 공백 제거
    // 조회된 과목 조회
    if (inputValue === "창의와소통") {
      setIsTableVisible(true);
    } else {
      setIsTableVisible(false);
    }
  }

  /* 장바구니 담기 */
  const addCart = (name) => {
    if (window.confirm(`${name}을 장바구니에 담으시겠습니까?`)) {
      // 확인을 눌렀을 때
      document.getElementById("btn-add").textContent = "완료";
      document.getElementById("btn-add").style.backgroundColor = "white";
      document.getElementById("btn-add").style.color = "red";
      document.getElementById("btn-add").style.border = "none";
    } else {
      // 취소를 눌렀을 때
    }
    return;
  };

  return (
    <div className="wrap-container">
      <Navigator sugang="#666" basket="#2155a4"></Navigator>
      <div className="container">
        <Header></Header>
        <div className="contents" id="contents">
          <ul className="sw-tabs" id="sTabs">
            <li
              data-id="tab_01"
              id="menu01"
              className={activeTab === "tab_01" ? "is-active" : ""}
              onClick={() => handleTabClick("tab_01")}
            >
              장바구니 안내
            </li>
            <li
              data-id="tab_02"
              id="menu02"
              className={activeTab === "tab_02" ? "is-active" : ""}
              onClick={() => handleTabClick("tab_02")}
            >
              장바구니 담기
            </li>
            <li
              data-id="tab_03"
              id="menu03"
              className={activeTab === "tab_03" ? "is-active" : ""}
              onClick={() => handleTabClick("tab_03")}
            >
              장바구니 목록
            </li>
            <li
              data-id="tab_04"
              id="menu04"
              className={activeTab === "tab_04" ? "is-active" : ""}
              onClick={incompleteFunctionClick}
            >
              장바구니 시간표
            </li>
          </ul>
          <div className="sw-tab-contents">
            <div
              id="tab_01"
              className={activeTab === "tab_01" ? "is-active" : ""}
            >
              <div className="info-box">
                <div>
                  <font color="navy">
                    <b
                      style={{
                        fontFamily: "Nanum Gothic Coding",
                        fontSize: "18px",
                      }}
                    >
                      ※ 장바구니 안내{" "}
                    </b>
                  </font>
                  <ol class="list-dot">
                    <li
                      style={{
                        marginTop: "10px",
                        fontFamily: "Nanum Gothic Coding",
                        fontSize: "14px",
                      }}
                    >
                      수강신청을 위해 장바구니에 원하는 과목을 담아주세요.
                    </li>
                    <li
                      style={{
                        fontFamily: "Nanum Gothic Coding",
                        fontSize: "14px",
                      }}
                    >
                      장바구니에 담은 과목들로만 수강신청을 진행할 수 있습니다.
                    </li>
                    <li
                      style={{
                        fontFamily: "Nanum Gothic Coding",
                        fontSize: "14px",
                      }}
                    >
                      사이트를 벗어나면 장바구니 목록은 초기화됩니다.
                    </li>
                  </ol>
                  <br />
                  <br />

                  <div
                    style={{
                      fontFamily: "Nanum Gothic Coding",
                      borderTop: "1px solid lightgray",
                      paddingTop: "10px",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
                    ❗ 장바구니 담기가 가능한 과목 목록은 아래와 같습니다.
                    (2023-10-06 기준){" "}
                  </div>
                  <div
                    style={{
                      fontFamily: "Nanum Gothic Coding",
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginBottom: "5px",
                      marginTop: "10px",
                    }}
                  >
                    ▪ 공통교양
                  </div>
                  <ul>
                    <li
                      style={{
                        fontFamily: "Nanum Gothic Coding",
                        fontSize: "14px",
                        marginBottom: "5px",
                        marginLeft: "20px",
                      }}
                    >
                      창의와 소통
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              id="tab_02"
              className={activeTab === "tab_02" ? "is-active" : ""}
            >
              <div className="form-search">
                <form
                  name="sForm"
                  id="sForm"
                  method="post"
                  onSubmit="return false"
                >
                  <table>
                    <colgroup>
                      <col width="80px" />
                      <col width="100px" />
                      <col width="200px" />
                      <col width="150px" />
                      <col width="100px" />
                      <col width="220px" />
                      <col />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th id="h_01">과정</th>
                        <td>
                          <select name="pCourse" id="pCourse">
                            <option value={3} selected>
                              학부
                            </option>
                            <option value={2}>대학원</option>
                          </select>
                        </td>
                        <th id="h_02">대학(원)/교양/연계/융합</th>
                        <td>
                          <div className="cols">
                            <select name="pCol" id="pCol" onchange="fnCol()">
                              <option selected>교양</option>
                            </select>
                          </div>
                        </td>
                        <th
                          id="h_03"
                          style={{ leftMargin: "30px", border: "1px" }}
                        >
                          교과목명
                        </th>
                        <td>
                          <input
                            type="text"
                            name="pKorNm"
                            id="pKorNm"
                            maxLength={50}
                            value={lctrName}
                            onChange={(e) => setLctrName(e.target.value)}
                          />
                        </td>
                        <td
                          style={{
                            textAlign: "left",
                            fontWeight: "bold",
                            color: "blue",
                          }}
                        >
                          &nbsp;&nbsp;선호조건&nbsp;
                          <select
                            name="favorite"
                            id="favorite"
                            onchange="fnCol()"
                            style={{
                              padding: "0 20px 2px 5px",
                              maxWidth: "150px",
                              color: "blue",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th id="h_04">캠퍼스</th>
                        <td>
                          <select
                            name="pCampus"
                            id="pCampus"
                            onchange="fnCol()"
                          >
                            <option value={1} selected>
                              서울
                            </option>
                            <option value={2}>다빈치</option>
                          </select>
                        </td>
                        <th id="h_05">학부(과)/전공/영역</th>
                        <td>
                          <div className="cols">
                            <select name="pSust" id="pSust" onchange="fnCol()">
                              <option>공통교양</option>
                            </select>
                          </div>
                        </td>
                        <th id="h_06">요일/교시</th>
                        <td style={{ display: "flex" }}>
                          <select
                            name="pDay"
                            id="pDay"
                            style={{ width: "60px" }}
                          >
                            <option value>전체--</option>
                            <option value={1}>월</option>
                            <option value={2}>화</option>
                            <option value={3}>수</option>
                            <option value={4}>목</option>
                            <option value={5}>금</option>
                            <option value={6}>토</option>
                          </select>
                          &nbsp;
                          <select
                            id="pLttm"
                            name="pLttm"
                            style={{ width: "160px" }}
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            id="btnSearch"
                            className="btn-sub"
                            onClick={fnSearch}
                          >
                            조회
                          </button>
                          <button
                            type="button"
                            id="btnReset"
                            onClick={incompleteFunctionClick}
                          >
                            초기화
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>

              {isTableVisible && (
                <div
                  className="wrap-grid"
                  style={{ paddingBottom: "5px", display: "" }}
                  id="tableContainer"
                >
                  <div
                    className="ui-jqgrid ui-widget ui-widget-content ui-corner-all"
                    id="gbox_gridBasket"
                    dir="ltr"
                    style={{ width: "1239px" }}
                  >
                    <div
                      className="ui-jqgrid-view"
                      id="gview_gridBasket"
                      style={{ width: "1239px" }}
                    >
                      <div
                        className="ui-jqgrid-titlebar ui-jqgrid-caption ui-widget-header ui-corner-top ui-helper-clearfix"
                        style={{ display: "none" }}
                      >
                        <a
                          role="link"
                          className="ui-jqgrid-titlebar-close ui-corner-all HeaderButton"
                          style={{ right: "0px" }}
                        >
                          <span className="ui-icon ui-icon-circle-triangle-n" />
                        </a>
                        <span className="ui-jqgrid-title" />
                      </div>
                      <div
                        className="ui-state-default ui-jqgrid-hdiv"
                        style={{ width: "1239px" }}
                      >
                        <div className="ui-jqgrid-hbox">
                          <table
                            className="ui-jqgrid-htable"
                            style={{ width: "1221px" }}
                            role="grid"
                            aria-labelledby="gbox_gridBasket"
                            cellSpacing={0}
                            cellPadding={0}
                            border={0}
                          >
                            <thead>
                              <tr className="ui-jqgrid-labels" role="rowheader">
                                <th
                                  id="jqgh_gridBasket"
                                  role="columnheader"
                                  className="ui-state-default ui-th-column ui-th-ltr"
                                  style={{ width: "65px" }}
                                >
                                  <div
                                    id="jqgh_gridBasket"
                                    className="ui-jqgrid-sortable"
                                  >
                                    장바구니
                                    <span
                                      className="s-ico"
                                      style={{ display: "none" }}
                                    >
                                      <span
                                        sort="asc"
                                        className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                      />
                                      <span
                                        sort="desc"
                                        className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                      />
                                    </span>
                                  </div>
                                </th>
                                <th
                                  id="gridBasket_apply_nm"
                                  role="columnheader"
                                  className="ui-state-default ui-th-column ui-th-ltr"
                                  title="예비과목"
                                  style={{ width: "65px" }}
                                >
                                  <div
                                    id="jqgh_gridBasket_apply_nm"
                                    className="ui-jqgrid-sortable"
                                  >
                                    예비과목
                                    <span
                                      className="s-ico"
                                      style={{ display: "none" }}
                                    >
                                      <span
                                        sort="asc"
                                        className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                      />
                                      <span
                                        sort="desc"
                                        className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                      />
                                    </span>
                                  </div>
                                </th>
                                <th
                                  id="gridBasket_apply_nm"
                                  role="columnheader"
                                  className="ui-state-default ui-th-column ui-th-ltr"
                                  title="대학"
                                  style={{ width: "75px" }}
                                >
                                  <div
                                    id="jqgh_gridBasket_apply_nm"
                                    className="ui-jqgrid-sortable"
                                  >
                                    대학
                                    <span
                                      className="s-ico"
                                      style={{ display: "none" }}
                                    >
                                      <span
                                        sort="asc"
                                        className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                      />
                                      <span
                                        sort="desc"
                                        className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                      />
                                    </span>
                                  </div>
                                </th>
                                <th
                                  id="gridBasket_apply_nm"
                                  role="columnheader"
                                  className="ui-state-default ui-th-column ui-th-ltr"
                                  title="개설학과			"
                                  style={{ width: "55px" }}
                                >
                                  <div
                                    id="jqgh_gridBasket_apply_nm"
                                    className="ui-jqgrid-sortable"
                                  >
                                    개설학과
                                    <span
                                      className="s-ico"
                                      style={{ display: "none" }}
                                    >
                                      <span
                                        sort="asc"
                                        className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                      />
                                      <span
                                        sort="desc"
                                        className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                      />
                                    </span>
                                  </div>
                                </th>
                                <th
                                  id="gridBasket_shyrnm"
                                  role="columnheader"
                                  className="ui-state-default ui-th-column ui-th-ltr"
                                  title="학년"
                                  style={{ width: "47px" }}
                                >
                                  <div
                                    id="jqgh_gridBasket_shyrnm"
                                    className="ui-jqgrid-sortable"
                                  >
                                    학년
                                    <span
                                      className="s-ico"
                                      style={{ display: "none" }}
                                    >
                                      <span
                                        sort="asc"
                                        className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                      />
                                      <span
                                        sort="desc"
                                        className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                      />
                                    </span>
                                  </div>
                                </th>
                                <th
                                  id="gridBasket_pobtnm"
                                  role="columnheader"
                                  className="ui-state-default ui-th-column ui-th-ltr"
                                  title="이수구분"
                                  style={{ width: "50px" }}
                                >
                                  <div
                                    id="jqgh_gridBasket_pobtnm"
                                    className="ui-jqgrid-sortable"
                                  >
                                    이수구분
                                    <span
                                      className="s-ico"
                                      style={{ display: "none" }}
                                    >
                                      <span
                                        sort="asc"
                                        className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                      />
                                      <span
                                        sort="desc"
                                        className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                      />
                                    </span>
                                  </div>
                                </th>
                                <th
                                  id="gridBasket_sbjtclss"
                                  role="columnheader"
                                  className="ui-state-default ui-th-column ui-th-ltr"
                                  title="과목번호-분반"
                                  style={{ width: "80px" }}
                                >
                                  <div
                                    id="jqgh_gridBasket_sbjtclss"
                                    className="ui-jqgrid-sortable"
                                  >
                                    과목번호-분반
                                    <span
                                      className="s-ico"
                                      style={{ display: "none" }}
                                    >
                                      <span
                                        sort="asc"
                                        className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                      />
                                      <span
                                        sort="desc"
                                        className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                      />
                                    </span>
                                  </div>
                                </th>
                                <th
                                  id="gridBasket_kornm"
                                  role="columnheader"
                                  className="ui-state-default ui-th-column ui-th-ltr"
                                  title="과목명"
                                  style={{ width: "142px" }}
                                >
                                  <div
                                    id="jqgh_gridBasket_kornm"
                                    className="ui-jqgrid-sortable"
                                  >
                                    과목명
                                    <span
                                      className="s-ico"
                                      style={{ display: "none" }}
                                    >
                                      <span
                                        sort="asc"
                                        className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                      />
                                      <span
                                        sort="desc"
                                        className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                      />
                                    </span>
                                  </div>
                                </th>
                                <th
                                  id="gridBasket_pntnm"
                                  role="columnheader"
                                  className="ui-state-default ui-th-column ui-th-ltr"
                                  title="학점-시간"
                                  style={{ width: "55px" }}
                                >
                                  <div
                                    id="jqgh_gridBasket_pntnm"
                                    className="ui-jqgrid-sortable"
                                  >
                                    학점-시간
                                    <span
                                      className="s-ico"
                                      style={{ display: "none" }}
                                    >
                                      <span
                                        sort="asc"
                                        className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                      />
                                      <span
                                        sort="desc"
                                        className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                      />
                                    </span>
                                  </div>
                                </th>
                                <th
                                  id="gridBasket_profnm"
                                  role="columnheader"
                                  className="ui-state-default ui-th-column ui-th-ltr"
                                  title="담당교수"
                                  style={{ width: "55px" }}
                                >
                                  <div
                                    id="jqgh_gridBasket_profnm"
                                    className="ui-jqgrid-sortable"
                                  >
                                    담당교수
                                    <span
                                      className="s-ico"
                                      style={{ display: "none" }}
                                    >
                                      <span
                                        sort="asc"
                                        className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                      />
                                      <span
                                        sort="desc"
                                        className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                      />
                                    </span>
                                  </div>
                                </th>
                                <th
                                  id="gridBasket_clsefgnm"
                                  role="columnheader"
                                  className="ui-state-default ui-th-column ui-th-ltr"
                                  title="폐강"
                                  style={{ width: "36px" }}
                                >
                                  <div
                                    id="jqgh_gridBasket_clsefgnm"
                                    className="ui-jqgrid-sortable"
                                  >
                                    폐강
                                    <span
                                      className="s-ico"
                                      style={{ display: "none" }}
                                    >
                                      <span
                                        sort="asc"
                                        className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                      />
                                      <span
                                        sort="desc"
                                        className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                      />
                                    </span>
                                  </div>
                                </th>
                                <th
                                  id="gridBasket_ltbdrm"
                                  role="columnheader"
                                  className="ui-state-default ui-th-column ui-th-ltr"
                                  title="강의시간"
                                  style={{ width: "189px" }}
                                >
                                  <div
                                    id="jqgh_gridBasket_ltbdrm"
                                    className="ui-jqgrid-sortable"
                                  >
                                    강의시간
                                    <span
                                      className="s-ico"
                                      style={{ display: "none" }}
                                    >
                                      <span
                                        sort="asc"
                                        className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                      />
                                      <span
                                        sort="desc"
                                        className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                      />
                                    </span>
                                  </div>
                                </th>
                                <th
                                  id="gridBasket_type_nm"
                                  role="columnheader"
                                  className="ui-state-default ui-th-column ui-th-ltr"
                                  title="강의유형"
                                  style={{ width: "50px" }}
                                >
                                  <div
                                    id="jqgh_gridBasket_type_nm"
                                    className="ui-jqgrid-sortable"
                                  >
                                    강의유형
                                    <span
                                      className="s-ico"
                                      style={{ display: "none" }}
                                    >
                                      <span
                                        sort="asc"
                                        className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                      />
                                      <span
                                        sort="desc"
                                        className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                      />
                                    </span>
                                  </div>
                                </th>
                                <th
                                  id="gridBasket_flx"
                                  role="columnheader"
                                  className="ui-state-default ui-th-column ui-th-ltr"
                                  title="유연학기"
                                  style={{ width: "50px" }}
                                >
                                  <div
                                    id="jqgh_gridBasket_flx"
                                    className="ui-jqgrid-sortable"
                                  >
                                    유연학기
                                    <span
                                      className="s-ico"
                                      style={{ display: "none" }}
                                    >
                                      <span
                                        sort="asc"
                                        className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                      />
                                      <span
                                        sort="desc"
                                        className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                      />
                                    </span>
                                  </div>
                                </th>
                                <th
                                  id="gridBasket_retakenm"
                                  role="columnheader"
                                  className="ui-state-default ui-th-column ui-th-ltr"
                                  title="신청인원"
                                  style={{ width: "50px" }}
                                >
                                  <div
                                    id="jqgh_gridBasket_retakenm"
                                    className="ui-jqgrid-sortable"
                                  >
                                    신청인원
                                    <span
                                      className="s-ico"
                                      style={{ display: "none" }}
                                    >
                                      <span
                                        sort="asc"
                                        className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                      />
                                      <span
                                        sort="desc"
                                        className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                      />
                                    </span>
                                  </div>
                                </th>
                                <th
                                  id="gridBasket_retakenm"
                                  role="columnheader"
                                  className="ui-state-default ui-th-column ui-th-ltr"
                                  title="비고	"
                                  style={{ width: "150px" }}
                                >
                                  <div
                                    id="jqgh_gridBasket_retakenm"
                                    className="ui-jqgrid-sortable"
                                  >
                                    비고
                                    <span
                                      className="s-ico"
                                      style={{ display: "none" }}
                                    >
                                      <span
                                        sort="asc"
                                        className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                      />
                                      <span
                                        sort="desc"
                                        className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                      />
                                    </span>
                                  </div>
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                      </div>
                      <div
                        className="ui-jqgrid-bdiv"
                        style={{ height: "428px", width: "1239px" }}
                      >
                        <div style={{ position: "relative" }}>
                          <table
                            id="gridBasket"
                            tabIndex={0}
                            cellSpacing={0}
                            cellPadding={0}
                            border={0}
                            role="grid"
                            aria-multiselectable="false"
                            aria-labelledby="gbox_gridBasket"
                            className="ui-jqgrid-btable"
                            style={{ width: "1221px" }}
                          >
                            <tbody className="ui-sortable">
                              <tr
                                role="row"
                                tabIndex={-1}
                                className="ui-widget-content jqgrow ui-row-ltr"
                              >
                                <td
                                  role="gridcell"
                                  title="장바구니"
                                  style={{
                                    width: "65px",
                                    textAlign: "center",
                                    verticalAlign: "middle",
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      height: "100%",
                                    }}
                                  >
                                    <button
                                      id="btn-add"
                                      className="btn-main btn-sm"
                                      onClick={() => addCart("창의와 소통")}
                                    >
                                      담기
                                    </button>
                                  </div>
                                </td>
                                <td
                                  role="gridcell"
                                  title="예비과목"
                                  style={{
                                    width: "65px",
                                    textAlign: "center",
                                    verticalAlign: "middle",
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      height: "100%",
                                    }}
                                  >
                                    <button
                                      className="btn-main btn-sm"
                                      onClick={incompleteFunctionClick}
                                    >
                                      추가
                                    </button>
                                  </div>
                                </td>
                                <td
                                  role="gridcell"
                                  title="대학"
                                  aria-describedby="gridBasket_shyrnm"
                                  style={{ width: "75px" }}
                                >
                                  대학(전체)
                                </td>
                                <td
                                  role="gridcell"
                                  style={{ width: "55px" }}
                                  title="개설학과"
                                  aria-describedby="gridBasket_shyrnm"
                                />
                                <td
                                  role="gridcell"
                                  style={{ width: "47px" }}
                                  title="학년"
                                  aria-describedby="gridBasket_shyrnm"
                                >
                                  1
                                </td>
                                <td
                                  role="gridcell"
                                  style={{ width: "50px" }}
                                  title="교양"
                                  aria-describedby="gridBasket_pobtnm"
                                >
                                  교양
                                </td>
                                <td
                                  role="gridcell"
                                  style={{ width: "80px" }}
                                  title="대학"
                                  aria-describedby="gridBasket_sbjtclss"
                                >
                                  49949-01
                                </td>
                                <td
                                  id="gridBasket_sbjtclss"
                                  role="gridcell"
                                  style={{
                                    textAlign: "left",
                                    cursor: "pointer",
                                    color: "blue",
                                    width: "142px",
                                  }}
                                  title="창의와소통"
                                  aria-describedby="gridBasket_kornm"
                                >
                                  창의와소통
                                </td>
                                <td
                                  role="gridcell"
                                  style={{ width: "55px" }}
                                  title="2-2"
                                  aria-describedby="gridBasket_pntnm"
                                >
                                  2-2
                                </td>
                                <td
                                  role="gridcell"
                                  style={{ width: "55px" }}
                                  title="김교수"
                                  aria-describedby="gridBasket_profnm"
                                >
                                  김교수
                                </td>
                                <td
                                  role="gridcell"
                                  style={{ width: "36px" }}
                                  aria-describedby="gridBasket_clsefgnm"
                                >
                                  &nbsp;
                                </td>
                                <td
                                  role="gridcell"
                                  style={{ textAlign: "left", width: "189px" }}
                                  title="수3,4303관(법학관)803호 <강의실>"
                                  aria-describedby="gridBasket_ltbdrm"
                                >
                                  수3,4
                                  <br />
                                  303관(법학관) 803호 &lt;강의실&gt;
                                </td>
                                <td
                                  id="jqgh_gridBasket_flx"
                                  role="gridcell"
                                  style={{ width: "50px" }}
                                  title="강의유형"
                                  aria-describedby="gridBasket_cntcapa2"
                                >
                                  &nbsp;
                                </td>
                                <td
                                  id="jqgh_gridBasket_flx"
                                  role="gridcell"
                                  style={{ width: "50px" }}
                                  title="유연학기"
                                  aria-describedby="gridBasket_cntcapa2"
                                >
                                  &nbsp;
                                </td>
                                <td
                                  id="jqgh_gridBasket_flx"
                                  role="gridcell"
                                  style={{ width: "50px" }}
                                  title="신청인원"
                                  aria-describedby="gridBasket_cntcapa2"
                                >
                                  0
                                </td>
                                <td
                                  id="gridBasket_retakenm"
                                  role="gridcell"
                                  style={{ width: "150px" }}
                                  title="비고"
                                  aria-describedby="gridBasket_cntcapa2"
                                >
                                  공통교양[[수강대상:]]
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="ui-jqgrid-resize-mark" id="rs_mgridBasket">
                      &nbsp;
                    </div>
                  </div>
                  <table
                    id="jqgrid_dnd"
                    className="ui-jqgrid-dnd"
                    style={{ display: "none" }}
                  />
                </div>
              )}

              <div className="form-search">
                ※ <b>영역 안내 : 자자</b>(자과자학년), <b>자타</b>(자과타학년),
                <b>타부</b>(타학과,부전공,학생설계),
                <b>복연</b>(복수,연계,융합전공)
                <br />※ <b>장바구니 인원 표시 안내 : 숫자 3(10)</b>표시는
                <b className="txt-red">장바구니 신청인원</b>
                <b className="txt-blue">(수강정원)</b>입니다.
                <br />※<b>
                  정원이 0인 경우는 수강가능인원이 없는 것입니다.
                </b>{" "}
                개설대학 교학지원팀으로 문의하시기 바랍니다.
              </div>
            </div>
            <div
              id="tab_03"
              className={activeTab === "tab_03" ? "is-active" : ""}
            >
              <div className="sw-header" style={{ overflow: "visible" }}>
                <h3>
                  <b>
                    <span className="txt-red">▣ </span>
                  </b>
                  &nbsp;
                  <span id="wishTitle" className="txt-red">
                    장바구니 내역
                  </span>
                  &nbsp;&nbsp;
                  <small id="meta_1">
                    【{" "}
                    <span className="item">
                      과목수 : <em>1</em>
                    </span>
                    &nbsp;&nbsp;
                    <span className="item">
                      신청학점 : <em>2</em>
                    </span>
                    】
                  </small>
                  <span className="txt-blue" style={{ marginLeft: "20px" }}>
                    ▣{" "}
                  </span>
                  &nbsp;
                  <span id="preTitle" className="txt-blue">
                    예비과목 내역
                  </span>
                  &nbsp;&nbsp;
                  <small id="meta_2">
                    【{" "}
                    <span className="item">
                      과목수 : <em>0</em>
                    </span>
                    &nbsp;&nbsp;
                    <span className="item">
                      신청학점 : <em>0</em>
                    </span>
                    】
                  </small>
                </h3>
                <span style={{ float: "right" }} className="txt-red">
                  <b>
                    ※ Drag &amp; Drop -&gt; 순서 정렬 -&gt; '순서저장' 버튼 클릭
                    -&gt; 순서설정 완료
                  </b>
                  &nbsp;&nbsp;&nbsp;
                  <button
                    type="button"
                    className="btn-main"
                    id="btnSort"
                    onClick={incompleteFunctionClick}
                  >
                    순서저장
                  </button>
                </span>
              </div>
              <div className="wrap-grid">
                <div
                  className="ui-jqgrid ui-widget ui-widget-content ui-corner-all"
                  id="gbox_gridBasket"
                  dir="ltr"
                  style={{ width: "1239px" }}
                >
                  <div
                    className="ui-widget-overlay jqgrid-overlay"
                    id="lui_gridBasket"
                  />
                  <div
                    className="ui-jqgrid-view"
                    id="gview_gridBasket"
                    style={{ width: "1239px" }}
                  >
                    <div
                      className="ui-jqgrid-titlebar ui-jqgrid-caption ui-widget-header ui-corner-top ui-helper-clearfix"
                      style={{ display: "none" }}
                    >
                      <span className="ui-jqgrid-title" />
                    </div>
                    <div
                      className="ui-state-default ui-jqgrid-hdiv"
                      style={{ width: "1239px" }}
                    >
                      <div className="ui-jqgrid-hbox">
                        <table
                          className="ui-jqgrid-htable"
                          style={{ width: "1221px" }}
                          role="grid"
                          aria-labelledby="gbox_gridBasket"
                          cellSpacing={0}
                          cellPadding={0}
                          border={0}
                        >
                          <thead>
                            <tr className="ui-jqgrid-labels" role="rowheader">
                              <th
                                id="gridBasket_Drag"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "36px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_Drag"
                                  className="ui-jqgrid-sortable"
                                >
                                  DRAG
                                  <span
                                    className="s-ico"
                                    style={{ display: "none" }}
                                  >
                                    <span
                                      sort="asc"
                                      className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                    />
                                    <span
                                      sort="desc"
                                      className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                    />
                                  </span>
                                </div>
                              </th>
                              <th
                                id="gridBasket_apply_nm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                title="신청구분"
                                style={{ width: "71px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_apply_nm"
                                  className="ui-jqgrid-sortable"
                                >
                                  신청구분
                                  <span
                                    className="s-ico"
                                    style={{ display: "none" }}
                                  >
                                    <span
                                      sort="asc"
                                      className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                    />
                                    <span
                                      sort="desc"
                                      className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                    />
                                  </span>
                                </div>
                              </th>
                              <th
                                id="gridBasket_sbjtclss"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                title="과목번호-분반"
                                style={{ width: "80px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_sbjtclss"
                                  className="ui-jqgrid-sortable"
                                >
                                  과목번호-분반
                                  <span
                                    className="s-ico"
                                    style={{ display: "none" }}
                                  >
                                    <span
                                      sort="asc"
                                      className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                    />
                                    <span
                                      sort="desc"
                                      className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                    />
                                  </span>
                                </div>
                              </th>
                              <th
                                id="gridBasket_kornm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                title="과목명"
                                style={{ width: "142px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_kornm"
                                  className="ui-jqgrid-sortable"
                                >
                                  과목명
                                  <span
                                    className="s-ico"
                                    style={{ display: "none" }}
                                  >
                                    <span
                                      sort="asc"
                                      className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                    />
                                    <span
                                      sort="desc"
                                      className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                    />
                                  </span>
                                </div>
                              </th>
                              <th
                                id="gridBasket_shyrnm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                title="학년"
                                style={{ width: "47px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_shyrnm"
                                  className="ui-jqgrid-sortable"
                                >
                                  학년
                                  <span
                                    className="s-ico"
                                    style={{ display: "none" }}
                                  >
                                    <span
                                      sort="asc"
                                      className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                    />
                                    <span
                                      sort="desc"
                                      className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                    />
                                  </span>
                                </div>
                              </th>
                              <th
                                id="gridBasket_pobtnm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                title="이수구분"
                                style={{ width: "47px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_pobtnm"
                                  className="ui-jqgrid-sortable"
                                >
                                  이수구분
                                  <span
                                    className="s-ico"
                                    style={{ display: "none" }}
                                  >
                                    <span
                                      sort="asc"
                                      className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                    />
                                    <span
                                      sort="desc"
                                      className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                    />
                                  </span>
                                </div>
                              </th>
                              <th
                                id="gridBasket_pntnm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                title="학점-시간"
                                style={{ width: "55px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_pntnm"
                                  className="ui-jqgrid-sortable"
                                >
                                  학점-시간
                                  <span
                                    className="s-ico"
                                    style={{ display: "none" }}
                                  >
                                    <span
                                      sort="asc"
                                      className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                    />
                                    <span
                                      sort="desc"
                                      className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                    />
                                  </span>
                                </div>
                              </th>
                              <th
                                id="gridBasket_profnm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                title="담당교수"
                                style={{ width: "55px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_profnm"
                                  className="ui-jqgrid-sortable"
                                >
                                  담당교수
                                  <span
                                    className="s-ico"
                                    style={{ display: "none" }}
                                  >
                                    <span
                                      sort="asc"
                                      className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                    />
                                    <span
                                      sort="desc"
                                      className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                    />
                                  </span>
                                </div>
                              </th>
                              <th
                                id="gridBasket_clsefgnm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                title="폐강"
                                style={{ width: "36px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_clsefgnm"
                                  className="ui-jqgrid-sortable"
                                >
                                  폐강
                                  <span
                                    className="s-ico"
                                    style={{ display: "none" }}
                                  >
                                    <span
                                      sort="asc"
                                      className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                    />
                                    <span
                                      sort="desc"
                                      className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                    />
                                  </span>
                                </div>
                              </th>
                              <th
                                id="gridBasket_ltbdrm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                title="강의시간"
                                style={{ width: "189px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_ltbdrm"
                                  className="ui-jqgrid-sortable"
                                >
                                  강의시간
                                  <span
                                    className="s-ico"
                                    style={{ display: "none" }}
                                  >
                                    <span
                                      sort="asc"
                                      className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                    />
                                    <span
                                      sort="desc"
                                      className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                    />
                                  </span>
                                </div>
                              </th>
                              <th
                                id="gridBasket_cntcapa1"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                title="자자"
                                style={{ width: "47px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_cntcapa1"
                                  className="ui-jqgrid-sortable"
                                >
                                  자자
                                  <span
                                    className="s-ico"
                                    style={{ display: "none" }}
                                  >
                                    <span
                                      sort="asc"
                                      className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                    />
                                    <span
                                      sort="desc"
                                      className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                    />
                                  </span>
                                </div>
                              </th>
                              <th
                                id="gridBasket_cntcapa2"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                title="자타"
                                style={{ width: "47px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_cntcapa2"
                                  className="ui-jqgrid-sortable"
                                >
                                  자타
                                  <span
                                    className="s-ico"
                                    style={{ display: "none" }}
                                  >
                                    <span
                                      sort="asc"
                                      className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                    />
                                    <span
                                      sort="desc"
                                      className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                    />
                                  </span>
                                </div>
                              </th>
                              <th
                                id="gridBasket_cntcapa3"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                title="타부"
                                style={{ width: "47px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_cntcapa3"
                                  className="ui-jqgrid-sortable"
                                >
                                  타부
                                  <span
                                    className="s-ico"
                                    style={{ display: "none" }}
                                  >
                                    <span
                                      sort="asc"
                                      className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                    />
                                    <span
                                      sort="desc"
                                      className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                    />
                                  </span>
                                </div>
                              </th>
                              <th
                                id="gridBasket_cntcapa4"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                title="복연"
                                style={{ width: "47px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_cntcapa4"
                                  className="ui-jqgrid-sortable"
                                >
                                  복연
                                  <span
                                    className="s-ico"
                                    style={{ display: "none" }}
                                  >
                                    <span
                                      sort="asc"
                                      className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                    />
                                    <span
                                      sort="desc"
                                      className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                    />
                                  </span>
                                </div>
                              </th>
                              <th
                                id="gridBasket_type_nm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                title="강의유형"
                                style={{ width: "71px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_type_nm"
                                  className="ui-jqgrid-sortable"
                                >
                                  강의유형
                                  <span
                                    className="s-ico"
                                    style={{ display: "none" }}
                                  >
                                    <span
                                      sort="asc"
                                      className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                    />
                                    <span
                                      sort="desc"
                                      className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                    />
                                  </span>
                                </div>
                              </th>
                              <th
                                id="gridBasket_flx"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                title="유연학기"
                                style={{ width: "47px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_flx"
                                  className="ui-jqgrid-sortable"
                                >
                                  유연학기
                                  <span
                                    className="s-ico"
                                    style={{ display: "none" }}
                                  >
                                    <span
                                      sort="asc"
                                      className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                    />
                                    <span
                                      sort="desc"
                                      className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                    />
                                  </span>
                                </div>
                              </th>
                              <th
                                id="gridBasket_retakenm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                title="기이수<br>년도 / 학기 / 과목"
                                style={{ width: "105px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_retakenm"
                                  className="ui-jqgrid-sortable"
                                >
                                  기이수
                                  <br />
                                  년도 / 학기 / 과목
                                  <span
                                    className="s-ico"
                                    style={{ display: "none" }}
                                  >
                                    <span
                                      sort="asc"
                                      className="ui-grid-ico-sort ui-icon-asc ui-state-disabled ui-icon ui-icon-triangle-1-n ui-sort-ltr"
                                    />
                                    <span
                                      sort="desc"
                                      className="ui-grid-ico-sort ui-icon-desc ui-state-disabled ui-icon ui-icon-triangle-1-s ui-sort-ltr"
                                    />
                                  </span>
                                </div>
                              </th>
                            </tr>
                          </thead>
                        </table>
                      </div>
                    </div>
                    <div
                      className="ui-jqgrid-bdiv"
                      style={{ height: "428px", width: "1239px" }}
                    >
                      <div style={{ position: "relative" }}>
                        <div />
                        <table
                          id="gridBasket"
                          tabIndex={0}
                          cellSpacing={0}
                          cellPadding={0}
                          border={0}
                          role="grid"
                          aria-multiselectable="false"
                          aria-labelledby="gbox_gridBasket"
                          className="ui-jqgrid-btable"
                          style={{ width: "1221px" }}
                        >
                          <tbody className="ui-sortable">
                            <tr
                              className="jqgfirstrow"
                              role="row"
                              style={{ height: "auto" }}
                            >
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "36px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "71px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "80px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "142px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "47px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "47px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "55px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "55px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "36px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "189px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "47px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "47px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "47px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "47px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "71px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "47px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "105px" }}
                              />
                            </tr>
                            <tr
                              role="row"
                              id={1}
                              tabIndex={-1}
                              className="ui-widget-content jqgrow ui-row-ltr"
                            >
                              <td
                                role="gridcell"
                                style={{
                                  cursor: "move",
                                  background: "#f4cbdf",
                                  width: "36px",
                                }}
                                title
                                aria-describedby="gridBasket_Drag"
                              >
                                <img
                                  src="images/icon-menu.png"
                                  style={{ width: "15px", height: "10px" }}
                                />
                              </td>
                              <td
                                role="gridcell"
                                title="장바구니"
                                aria-describedby="gridBasket_apply_nm"
                              >
                                <p className="txt-red">장바구니</p>
                              </td>
                              <td
                                role="gridcell"
                                title="49949-01"
                                aria-describedby="gridBasket_sbjtclss"
                              >
                                49949-01
                              </td>
                              <td
                                role="gridcell"
                                style={{
                                  textAlign: "left",
                                  cursor: "pointer",
                                  color: "blue",
                                }}
                                title="창의와소통"
                                aria-describedby="gridBasket_kornm"
                              >
                                창의와소통
                              </td>
                              <td
                                role="gridcell"
                                title={1}
                                aria-describedby="gridBasket_shyrnm"
                              >
                                1
                              </td>
                              <td
                                role="gridcell"
                                title="교양"
                                aria-describedby="gridBasket_pobtnm"
                              >
                                교양
                              </td>
                              <td
                                role="gridcell"
                                title="2-2"
                                aria-describedby="gridBasket_pntnm"
                              >
                                2-2
                              </td>
                              <td
                                role="gridcell"
                                title="김교수"
                                aria-describedby="gridBasket_profnm"
                              >
                                김교수
                              </td>
                              <td
                                role="gridcell"
                                aria-describedby="gridBasket_clsefgnm"
                              />
                              <td
                                role="gridcell"
                                style={{ textAlign: "left" }}
                                title="수3,4303관(법학관)803호 <강의실>"
                                aria-describedby="gridBasket_ltbdrm"
                              >
                                수3,4
                                <br />
                                303관(법학관) 803호 &lt;강의실&gt;
                              </td>
                              <td
                                role="gridcell"
                                title="1(60)"
                                aria-describedby="gridBasket_cntcapa1"
                              >
                                <b>
                                  1<br />
                                  (60)
                                </b>
                              </td>
                              <td
                                role="gridcell"
                                title="0(0)"
                                aria-describedby="gridBasket_cntcapa2"
                              >
                                0<br />
                                (0)
                              </td>
                              <td
                                role="gridcell"
                                title="0(0)"
                                aria-describedby="gridBasket_cntcapa3"
                              >
                                0<br />
                                (0)
                              </td>
                              <td
                                role="gridcell"
                                title="0(0)"
                                aria-describedby="gridBasket_cntcapa4"
                              >
                                0<br />
                                (0)
                              </td>
                              <td
                                role="gridcell"
                                title
                                aria-describedby="gridBasket_type_nm"
                              >
                                &nbsp;
                              </td>
                              <td
                                role="gridcell"
                                title
                                aria-describedby="gridBasket_flx"
                              >
                                &nbsp;
                              </td>
                              <td
                                role="gridcell"
                                title
                                aria-describedby="gridBasket_retakenm"
                              >
                                &nbsp;
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="ui-jqgrid-resize-mark" id="rs_mgridBasket">
                    &nbsp;
                  </div>
                </div>
                <table
                  id="jqgrid_dnd"
                  className="ui-jqgrid-dnd"
                  style={{ display: "none" }}
                />
              </div>
              <div className="form-search">
                ※ <b>영역 안내 : 자자</b>(자과자학년), <b>자타</b>(자과타학년),
                <b>타부</b>(타학과,부전공,학생설계),
                <b>복연</b>(복수,연계,융합전공)
                <br />※ <b>장바구니 인원 표시 안내 : 숫자 3(10)</b>표시는
                <b className="txt-red">장바구니 신청인원</b>
                <b className="txt-blue">(수강정원)</b>입니다.
                <br />※<b>
                  정원이 0인 경우는 수강가능인원이 없는 것입니다.
                </b>{" "}
                개설대학 교학지원팀으로 문의하시기 바랍니다.
                <br />
                <br />
                <span className="txt-blue">
                  ※ 순서 정렬 후 반드시
                  <b className="txt-red">
                    "순서저장" 버튼을 클릭해야만 정렬된 내용이 저장
                  </b>
                  됩니다.{" "}
                </span>
                <br />
              </div>
            </div>
            <div id="tab_04" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;

import React, { useState } from "react";
import "../styles/sugang.css";
import "../styles/jqgrid.css";

import Header from "../components/Header";
import Navigator from "../components/Navigator";
import { incompleteFunctionClick } from "../utils/message";

function Sugang() {
  /* 탭 이동 */
  const [activeTab, setActiveTab] = useState("tab_01"); // 활성화된 탭의 ID를 저장하는 상태
  const handleTabClick = (tabId) => {
    setActiveTab(tabId); // 클릭한 탭의 ID로 상태 업데이트
  };

  /* 수강 신청 */
  const handleApplyClick = () => {
    if (window.confirm("창의와 소통을 신청하시겠습니까?")) {
      // 확인을 눌렀을 때
      document.getElementById("btn-apply").textContent = "완료";
      document.getElementById("btn-apply").style.backgroundColor = "white";
      document.getElementById("btn-apply").style.color = "red";
      document.getElementById("btn-apply").style.border = "none";
    } else {
      // 취소를 눌렀을 때
    }
  };
  return (
    <div className="wrap-container">
      <Navigator sugang="#2155a4" basket="#666"></Navigator>
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
              수강신청 안내
            </li>
            <li
              data-id="tab_02"
              id="menu02"
              className={activeTab === "tab_02" ? "is-active" : ""}
              onClick={() => handleTabClick("tab_02")}
            >
              장바구니 목록
            </li>
            <li
              data-id="tab_03"
              id="menu03"
              className={activeTab === "tab_03" ? "is-active" : ""}
              onClick={() => handleTabClick("tab_03")}
            >
              강의시간표 조회/신청
            </li>
            <li
              data-id="tab_04"
              id="menu04"
              className={activeTab === "tab_04" ? "is-active" : ""}
              onClick={() => handleTabClick("tab_04")}
            >
              수강신청내역(취소)
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
                      ※ 수강신청 안내{" "}
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
                      수강신청은 <b>장바구니 목록</b>에서 진행됩니다.
                    </li>
                    <li
                      style={{
                        fontFamily: "Nanum Gothic Coding",
                        fontSize: "14px",
                      }}
                    >
                      장바구니에 담은 과목들로 수강신청을 진행할 수 있습니다.
                    </li>
                    <li
                      style={{
                        fontFamily: "Nanum Gothic Coding",
                        fontSize: "14px",
                      }}
                    >
                      아직 장바구니에 과목을 담지 않았다면 홈으로 돌아가
                      <b> 장바구니 담기</b>를 진행해주세요.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div
              id="tab_02"
              className={activeTab === "tab_02" ? "is-active" : ""}
            >
              <div className="sw-header" style={{ overflow: "visible" }}>
                <h3>
                  <span className="txt-blue">▣ </span>&nbsp;
                  <span id className="txt-black" />
                  장바구니/예비과목 내역
                </h3>
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
                    className="loading ui-state-default ui-state-active"
                    id="load_gridBasket"
                    style={{ display: "none" }}
                  >
                    Loading ...
                  </div>
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
                                id="gridBasket_apply_nm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                title="신청"
                                style={{ width: "60px" }}
                              >
                                <div
                                  id="jqgh_gridBasket_apply_nm"
                                  className="ui-jqgrid-sortable"
                                >
                                  신청
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
                                style={{ height: "0px", width: "60px" }}
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
                                    className="btn-main btn-sm"
                                    id="btn-apply"
                                    onClick={handleApplyClick}
                                  >
                                    신청
                                  </button>
                                </div>
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
                                style={{}}
                                title={1}
                                aria-describedby="gridBasket_shyrnm"
                              >
                                1
                              </td>
                              <td
                                role="gridcell"
                                style={{}}
                                title="교양"
                                aria-describedby="gridBasket_pobtnm"
                              >
                                교양
                              </td>
                              <td
                                role="gridcell"
                                style={{}}
                                title="2-2"
                                aria-describedby="gridBasket_pntnm"
                              >
                                2-2
                              </td>
                              <td
                                role="gridcell"
                                style={{}}
                                title="김교수"
                                aria-describedby="gridBasket_profnm"
                              >
                                김교수
                              </td>
                              <td
                                role="gridcell"
                                style={{}}
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
                                style={{}}
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
                                style={{}}
                                title="0(0)"
                                aria-describedby="gridBasket_cntcapa2"
                              >
                                0<br />
                                (0)
                              </td>
                              <td
                                role="gridcell"
                                style={{}}
                                title="0(0)"
                                aria-describedby="gridBasket_cntcapa3"
                              >
                                0<br />
                                (0)
                              </td>
                              <td
                                role="gridcell"
                                style={{}}
                                title="0(0)"
                                aria-describedby="gridBasket_cntcapa4"
                              >
                                0<br />
                                (0)
                              </td>
                              <td
                                role="gridcell"
                                style={{}}
                                title
                                aria-describedby="gridBasket_type_nm"
                              >
                                &nbsp;
                              </td>
                              <td
                                role="gridcell"
                                style={{}}
                                title
                                aria-describedby="gridBasket_flx"
                              >
                                &nbsp;
                              </td>
                              <td
                                role="gridcell"
                                style={{}}
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
            </div>
            <div
              id="tab_03"
              className={activeTab === "tab_03" ? "is-active" : ""}
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
                            onClick={incompleteFunctionClick}
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
              <div
                className="wrap-grid"
                style={{ paddingBottom: "5px", display: "none" }}
                id="tableContainer"
              >
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
                    className="loading ui-state-default ui-state-active"
                    id="load_gridBasket"
                    style={{ display: "none" }}
                  >
                    Loading ...
                  </div>
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
                                    className="btn-main btn-sm"
                                    onclick="alert('창의와소통을 장바구니에 담으시겠습니까?')"
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
                                  <button className="btn-main btn-sm">
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
              id="tab_04"
              className={activeTab === "tab_04" ? "is-active" : ""}
            >
              <div className="sw-header">
                <h3>
                  <b>
                    <span className="txt-blue">▣ </span>
                  </b>
                  &nbsp;<span id="suTitle">수강신청 내역</span>&nbsp;&nbsp;
                  <small id="meta_3">
                    【{" "}
                    <span className="item">
                      신청과목수 : <em>1</em>
                    </span>
                    &nbsp;&nbsp;
                    <span className="item">
                      신청학점 : <em>2</em>
                    </span>{" "}
                    】
                  </small>
                </h3>
              </div>
              <div className="wrap-grid">
                <div
                  className="ui-jqgrid ui-widget ui-widget-content ui-corner-all"
                  id="gbox_gridSugang"
                  dir="ltr"
                  style={{ width: "1427px" }}
                >
                  <div
                    className="ui-widget-overlay jqgrid-overlay"
                    id="lui_gridSugang"
                  />
                  <div
                    className="loading ui-state-default ui-state-active"
                    id="load_gridSugang"
                    style={{ display: "none" }}
                  >
                    Loading ...
                  </div>
                  <div
                    className="ui-jqgrid-view"
                    id="gview_gridSugang"
                    style={{ width: "1427px" }}
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
                      style={{ width: "1427px" }}
                    >
                      <div className="ui-jqgrid-hbox">
                        <table
                          className="ui-jqgrid-htable"
                          style={{ width: "1427px" }}
                          role="grid"
                          aria-labelledby="gbox_gridSugang"
                          cellSpacing={0}
                          cellPadding={0}
                          border={0}
                        >
                          <thead>
                            <tr className="ui-jqgrid-labels" role="rowheader">
                              <th
                                id="gridSugang_campnm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "67px" }}
                                title="캠퍼스"
                              >
                                <div
                                  id="jqgh_gridSugang_campnm"
                                  className="ui-jqgrid-sortable"
                                >
                                  삭제
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
                                id="gridSugang_campnm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "67px" }}
                                title="캠퍼스"
                              >
                                <div
                                  id="jqgh_gridSugang_campnm"
                                  className="ui-jqgrid-sortable"
                                >
                                  캠퍼스
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
                                id="gridSugang_sbjtclss"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "117px" }}
                                title="과목번호-분반"
                              >
                                <div
                                  id="jqgh_gridSugang_sbjtclss"
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
                                id="gridSugang_kornm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "200px" }}
                                title="과목명"
                              >
                                <div
                                  id="jqgh_gridSugang_kornm"
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
                                id="gridSugang_clsefgnm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "67px" }}
                                title="폐강"
                              >
                                <div
                                  id="jqgh_gridSugang_clsefgnm"
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
                                id="gridSugang_pobtnm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "83px" }}
                                title="이수구분"
                              >
                                <div
                                  id="jqgh_gridSugang_pobtnm"
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
                                id="gridSugang_partnm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "67px" }}
                                title="교양영역"
                              >
                                <div
                                  id="jqgh_gridSugang_partnm"
                                  className="ui-jqgrid-sortable"
                                >
                                  교양영역
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
                                id="gridSugang_retake"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "67px" }}
                                title="재수강"
                              >
                                <div
                                  id="jqgh_gridSugang_retake"
                                  className="ui-jqgrid-sortable"
                                >
                                  재수강
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
                                id="gridSugang_pnt"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "67px" }}
                                title="학점"
                              >
                                <div
                                  id="jqgh_gridSugang_pnt"
                                  className="ui-jqgrid-sortable"
                                >
                                  학점
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
                                id="gridSugang_profnm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "100px" }}
                                title="담당교수"
                              >
                                <div
                                  id="jqgh_gridSugang_profnm"
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
                                id="gridSugang_ltbdrm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "333px" }}
                                title="강의시간"
                              >
                                <div
                                  id="jqgh_gridSugang_ltbdrm"
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
                                id="gridSugang_flx"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "67px" }}
                                title="유연학기"
                              >
                                <div
                                  id="jqgh_gridSugang_flx"
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
                                id="gridSugang_retakenm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "132px" }}
                                title="기이수<br>년도 / 학기 / 과목"
                              >
                                <div
                                  id="jqgh_gridSugang_retakenm"
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
                              <th
                                id="gridSugang_year"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "150px", display: "none" }}
                                title="이수연도"
                              >
                                <div
                                  id="jqgh_gridSugang_year"
                                  className="ui-jqgrid-sortable"
                                >
                                  이수연도
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
                                id="gridSugang_shtm"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "150px", display: "none" }}
                                title="학기"
                              >
                                <div
                                  id="jqgh_gridSugang_shtm"
                                  className="ui-jqgrid-sortable"
                                >
                                  학기
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
                                id="gridSugang_campcd"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "150px", display: "none" }}
                              >
                                <div
                                  id="jqgh_gridSugang_campcd"
                                  className="ui-jqgrid-sortable"
                                >
                                  campcd
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
                                id="gridSugang_sust"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "150px", display: "none" }}
                              >
                                <div
                                  id="jqgh_gridSugang_sust"
                                  className="ui-jqgrid-sortable"
                                >
                                  sust
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
                                id="gridSugang_sbjtno"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "150px", display: "none" }}
                                title="과목번호"
                              >
                                <div
                                  id="jqgh_gridSugang_sbjtno"
                                  className="ui-jqgrid-sortable"
                                >
                                  과목번호
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
                                id="gridSugang_clssno"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "150px", display: "none" }}
                                title="분반"
                              >
                                <div
                                  id="jqgh_gridSugang_clssno"
                                  className="ui-jqgrid-sortable"
                                >
                                  분반
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
                                id="gridSugang_corscd"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "150px", display: "none" }}
                                title="과정"
                              >
                                <div
                                  id="jqgh_gridSugang_corscd"
                                  className="ui-jqgrid-sortable"
                                >
                                  과정
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
                                id="gridSugang_clsefg"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "150px", display: "none" }}
                              >
                                <div
                                  id="jqgh_gridSugang_clsefg"
                                  className="ui-jqgrid-sortable"
                                >
                                  clsefg
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
                                id="gridSugang_pobtorg"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "150px", display: "none" }}
                              >
                                <div
                                  id="jqgh_gridSugang_pobtorg"
                                  className="ui-jqgrid-sortable"
                                >
                                  pobtorg
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
                                id="gridSugang_pobtgb"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "150px", display: "none" }}
                              >
                                <div
                                  id="jqgh_gridSugang_pobtgb"
                                  className="ui-jqgrid-sortable"
                                >
                                  pobtgb
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
                                id="gridSugang_repobtfg"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "150px", display: "none" }}
                              >
                                <div
                                  id="jqgh_gridSugang_repobtfg"
                                  className="ui-jqgrid-sortable"
                                >
                                  repobtfg
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
                                id="gridSugang_status"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "150px", display: "none" }}
                              >
                                <div
                                  id="jqgh_gridSugang_status"
                                  className="ui-jqgrid-sortable"
                                >
                                  status
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
                                id="gridSugang_delfg"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "150px", display: "none" }}
                              >
                                <div
                                  id="jqgh_gridSugang_delfg"
                                  className="ui-jqgrid-sortable"
                                >
                                  delfg
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
                                id="gridSugang_params"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "150px", display: "none" }}
                              >
                                <div
                                  id="jqgh_gridSugang_params"
                                  className="ui-jqgrid-sortable"
                                >
                                  params
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
                                id="gridSugang_code"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "150px", display: "none" }}
                              >
                                <div
                                  id="jqgh_gridSugang_code"
                                  className="ui-jqgrid-sortable"
                                >
                                  code
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
                                id="gridSugang_msg"
                                role="columnheader"
                                className="ui-state-default ui-th-column ui-th-ltr"
                                style={{ width: "150px", display: "none" }}
                              >
                                <div
                                  id="jqgh_gridSugang_msg"
                                  className="ui-jqgrid-sortable"
                                >
                                  msg
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
                      style={{ height: "218px", width: "1427px" }}
                    >
                      <div style={{ position: "relative" }}>
                        <div />
                        <table
                          id="gridSugang"
                          tabIndex={0}
                          cellSpacing={0}
                          cellPadding={0}
                          border={0}
                          role="grid"
                          aria-multiselectable="false"
                          aria-labelledby="gbox_gridSugang"
                          className="ui-jqgrid-btable"
                          style={{ width: "1427px" }}
                        >
                          <tbody>
                            <tr
                              className="jqgfirstrow"
                              role="row"
                              style={{ height: "auto" }}
                            >
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "67px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "67px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "117px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "200px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "67px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "83px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "67px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "67px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "67px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "100px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "333px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "67px" }}
                              />
                              <td
                                role="gridcell"
                                style={{ height: "0px", width: "132px" }}
                              />
                              {/* <td role="gridcell" style="height:0px;width:150px;display:none;"></td> */}
                            </tr>
                            <tr
                              role="row"
                              id={1}
                              tabIndex={-1}
                              className="ui-widget-content jqgrow ui-row-ltr"
                            >
                              <td
                                role="gridcell"
                                title="서울"
                                aria-describedby="gridSugang_campnm"
                              >
                                <button
                                  className="btn-main btn-sm"
                                  onClick={incompleteFunctionClick}
                                >
                                  삭제
                                </button>
                              </td>
                              <td
                                role="gridcell"
                                title="서울"
                                aria-describedby="gridSugang_campnm"
                              >
                                서울
                              </td>
                              <td
                                role="gridcell"
                                title="52811-01"
                                aria-describedby="gridSugang_sbjtclss"
                              >
                                52811-01
                              </td>
                              <td
                                role="gridcell"
                                style={{
                                  textAlign: "left",
                                  cursor: "pointer",
                                  color: "blue",
                                }}
                                title
                                aria-describedby="gridSugang_kornm"
                              >
                                창의와소통
                              </td>
                              <td
                                role="gridcell"
                                aria-describedby="gridSugang_clsefgnm"
                              />
                              <td
                                role="gridcell"
                                title="교양"
                                aria-describedby="gridSugang_pobtnm"
                              >
                                교양
                              </td>
                              <td
                                role="gridcell"
                                title
                                aria-describedby="gridSugang_partnm"
                              >
                                공통교양
                              </td>
                              <td
                                role="gridcell"
                                aria-describedby="gridSugang_retake"
                              />
                              <td
                                role="gridcell"
                                title={2}
                                aria-describedby="gridSugang_pnt"
                              >
                                2
                              </td>
                              <td
                                role="gridcell"
                                title="김교수"
                                aria-describedby="gridSugang_profnm"
                              >
                                김교수
                              </td>
                              <td
                                role="gridcell"
                                style={{ textAlign: "left" }}
                                title
                                aria-describedby="gridSugang_ltbdrm"
                              >
                                수3,4
                                <br />
                                법학관 803호{" "}
                              </td>
                              <td
                                role="gridcell"
                                title
                                aria-describedby="gridSugang_code"
                              >
                                &nbsp;
                              </td>
                              <td
                                role="gridcell"
                                title
                                aria-describedby="gridSugang_code"
                              >
                                &nbsp;
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="ui-jqgrid-resize-mark" id="rs_mgridSugang">
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="form-search">
                <ol>
                  <li>
                    ※ 삭제전 성적우수장학금수혜를 위한 기본학점을 다시한번
                    확인하시기 바랍니다.
                  </li>
                  <li style={{ marginLeft: "20px" }}>
                    [성적우수장학금 수혜를 위한 기본 수강신청 학점]
                    <br />
                    16학점이상 수강신청(단 졸업직전학기의 경우는 13학점 이상
                    수강신청.입학성적우수 장학의 경우는 입학년도별/학과별로 다를
                    수 있으므로 별도장학공지 참조.)
                  </li>
                </ol>
                <div style={{ height: "20px" }}>&nbsp;</div>
                <ol>
                  <li>
                    ※ 수강신청 마감을 하면 현재 신청된 과목의 삭제가
                    불가능합니다.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sugang;

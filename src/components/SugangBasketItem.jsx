import React, { useContext } from "react";
import { courseStateContext, courseDispatchContext } from "../App";
import Button from "./Button";

function SugangBasketItem() {
  const { courseData } = useContext(courseStateContext);
  const { onApply } = useContext(courseDispatchContext);

  const course = courseData.filter((it) => it.cType !== 0);
  const handleApplyClick = (name) => {
    if (window.confirm(`${name}을 신청하시겠습니까?`)) {
      // 확인을 눌렀을 때
      onApply(name);
    } else {
      // 취소를 눌렀을 때
    }
  };
  return (
    course && (
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
                          <span className="s-ico" style={{ display: "none" }}>
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
                          <span className="s-ico" style={{ display: "none" }}>
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
                          <span className="s-ico" style={{ display: "none" }}>
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
                          <span className="s-ico" style={{ display: "none" }}>
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
                          <span className="s-ico" style={{ display: "none" }}>
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
                          <span className="s-ico" style={{ display: "none" }}>
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
                          <span className="s-ico" style={{ display: "none" }}>
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
                          <span className="s-ico" style={{ display: "none" }}>
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
                          <span className="s-ico" style={{ display: "none" }}>
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
                          <span className="s-ico" style={{ display: "none" }}>
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
                          <span className="s-ico" style={{ display: "none" }}>
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
                          <span className="s-ico" style={{ display: "none" }}>
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
                          <span className="s-ico" style={{ display: "none" }}>
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
                          <span className="s-ico" style={{ display: "none" }}>
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
                          <span className="s-ico" style={{ display: "none" }}>
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
                          <span className="s-ico" style={{ display: "none" }}>
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
                    {course.map((it) => (
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
                            {/* <button
                              className="btn-main btn-sm"
                              id="btn-apply"
                              onClick={() => {}}
                            >
                              신청
                            </button> */}
                            <Button
                              page={"sugang"}
                              type={it.cType}
                              text={"신청"}
                              onClick={() => handleApplyClick(it.cName)}
                            ></Button>
                          </div>
                        </td>
                        <td
                          role="gridcell"
                          title="49949-01"
                          aria-describedby="gridBasket_sbjtclss"
                        >
                          {it.cNumber}
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
                          {it.cName}
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
                          {it.cCredit}-{it.cTime}
                        </td>
                        <td
                          role="gridcell"
                          style={{}}
                          title="김교수"
                          aria-describedby="gridBasket_profnm"
                        >
                          {it.professor}
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
                          {it.cTable}
                          <br />
                          {it.cPlace}
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
                    ))}
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
    )
  );
}

export default SugangBasketItem;

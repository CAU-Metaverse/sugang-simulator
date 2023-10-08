import React, { useContext } from "react";
import { courseStateContext } from "../App";
import { incompleteFunctionClick } from "../utils/message";

function SugangApplayItem() {
  const { courseData } = useContext(courseStateContext);

  const course = courseData.filter((it) => it.cType === 2);
  return (
    course && (
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
                    {course.map((it) => (
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
                          {it.cNumber}
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
                          {it.cName}
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
                          {it.cCredit}
                        </td>
                        <td
                          role="gridcell"
                          title="김교수"
                          aria-describedby="gridSugang_profnm"
                        >
                          {it.professor}
                        </td>
                        <td
                          role="gridcell"
                          style={{ textAlign: "left" }}
                          title
                          aria-describedby="gridSugang_ltbdrm"
                        >
                          {it.cTable}
                          <br />
                          {it.cPlace}
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
                    ))}
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
    )
  );
}

export default SugangApplayItem;

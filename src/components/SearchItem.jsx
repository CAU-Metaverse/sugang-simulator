import React, { useContext } from "react";
import { incompleteFunctionClick } from "../utils/message";
import { courseStateContext, courseDispatchContext } from "../App";
import Button from "./Button";

function SearchItem({ name }) {
  const { onBasket } = useContext(courseDispatchContext);
  const { courseData } = useContext(courseStateContext);
  const course = courseData.filter((it) => it.cName === name)[0]; // 조회된 과목 데이터

  /* 장바구니 담기 */
  const addCart = (name) => {
    if (window.confirm(`${name}을 장바구니에 담으시겠습니까?`)) {
      onBasket(name);
    } else {
    }
    return;
  };

  return (
    course && (
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
            <Button
              page={"basket"}
              type={course.cType}
              text={"담기"}
              onClick={() => {
                addCart(course.cName);
              }}
            ></Button>
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
          {course.cNumber}
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
          aria-describedby="gridBasket_kornm"
        >
          {course.cName}
        </td>
        <td
          role="gridcell"
          style={{ width: "55px" }}
          title="2-2"
          aria-describedby="gridBasket_pntnm"
        >
          {course.cTime}-{course.cCredit}
        </td>
        <td
          role="gridcell"
          style={{ width: "55px" }}
          title="김교수"
          aria-describedby="gridBasket_profnm"
        >
          {course.cProfessor}
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
          {course.cTable}
          <br />
          {course.cPlace}
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
    )
  );
}

export default SearchItem;

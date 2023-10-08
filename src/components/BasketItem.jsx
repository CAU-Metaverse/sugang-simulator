import React, { useContext } from "react";
import { courseStateContext } from "../App";

function BasketItem() {
  const { courseData } = useContext(courseStateContext);
  const basketList = courseData.filter((it) => it.cType === 1);

  return (
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
          <tr className="jqgfirstrow" role="row" style={{ height: "auto" }}>
            <td role="gridcell" style={{ height: "0px", width: "36px" }}></td>
            <td role="gridcell" style={{ height: "0px", width: "71px" }}></td>
            <td role="gridcell" style={{ height: "0px", width: "80px" }} />
            <td role="gridcell" style={{ height: "0px", width: "142px" }} />
            <td role="gridcell" style={{ height: "0px", width: "47px" }} />
            <td role="gridcell" style={{ height: "0px", width: "47px" }} />
            <td role="gridcell" style={{ height: "0px", width: "55px" }} />
            <td role="gridcell" style={{ height: "0px", width: "55px" }} />
            <td role="gridcell" style={{ height: "0px", width: "36px" }} />
            <td role="gridcell" style={{ height: "0px", width: "189px" }} />
            <td role="gridcell" style={{ height: "0px", width: "47px" }} />
            <td role="gridcell" style={{ height: "0px", width: "47px" }} />
            <td role="gridcell" style={{ height: "0px", width: "47px" }} />
            <td role="gridcell" style={{ height: "0px", width: "47px" }} />
            <td role="gridcell" style={{ height: "0px", width: "71px" }} />
            <td role="gridcell" style={{ height: "0px", width: "47px" }} />
            <td role="gridcell" style={{ height: "0px", width: "105px" }} />
          </tr>
          {basketList.map((it) => (
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
                {it.cCredit}-{it.cTime}
              </td>
              <td
                role="gridcell"
                title="김교수"
                aria-describedby="gridBasket_profnm"
              >
                {it.professor}
              </td>
              <td role="gridcell" aria-describedby="gridBasket_clsefgnm" />
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
              <td role="gridcell" title aria-describedby="gridBasket_type_nm">
                &nbsp;
              </td>
              <td role="gridcell" title aria-describedby="gridBasket_flx">
                &nbsp;
              </td>
              <td role="gridcell" title aria-describedby="gridBasket_retakenm">
                &nbsp;
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BasketItem;

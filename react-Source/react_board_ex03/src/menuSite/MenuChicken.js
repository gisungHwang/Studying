import { Link } from "react-router-dom";
import "./MenuChicken.css";
import bbq from "./storeimagechicken/bbq.svg";
import cham from "./storeimagechicken/cham.svg";
import df from "./storeimagechicken/default.svg";
import gyochon from "./storeimagechicken/gyochon.svg";
import hosik from "./storeimagechicken/hosik.svg";
import pradak from "./storeimagechicken/pradak.svg";
import CategorySlide from "./CategorySlide/CategorySlide";
import { useState } from "react";

function MenuChicken() {
  return (
    <div className="chwindow">
      <div className="chickentitle">
        <p>Chicken</p>
      </div>
      <div className="categoryslide">
        <CategorySlide />
      </div>
      <Link to="/boardlisthosik?hosik">
        <div className="onediv">
          <span className="chimg">
            <form>
              <table border="1" width="250px" align="right">
                <tr>
                  <td width="70px">상호명</td>
                  <td>호식이 두마리 치킨</td>
                </tr>
                <tr>
                  <td width="70px">픽업장소</td>
                  <td>하늘마당</td>
                </tr>
                <tr>
                  <td width="70px">배달비</td>
                  <td>6000원</td>
                </tr>
              </table>
            </form>
            <img className="chimg" src={hosik} alt={df} />
          </span>
          <span></span>
        </div>
      </Link>
      <Link to="/boardlistbbq?bbq">
        <div className="twodiv">
          <span className="chimg">
            <form>
              <table border="1" width="250px" align="right">
                <tr>
                  <td width="70px">상호명</td>
                  <td>BBQ</td>
                </tr>
                <tr>
                  <td width="70px">픽업장소</td>
                  <td>하늘마당</td>
                </tr>
                <tr>
                  <td width="70px">배달비</td>
                  <td>6000원</td>
                </tr>
              </table>
            </form>
            <img src={bbq} alt={df} />
          </span>
          <span></span>
        </div>
      </Link>
      <div className="threediv">
        <span className="chimg">
          <form>
            <table border="1" width="250px" align="right">
              <tr>
                <td width="70px">상호명</td>
                <td>푸라닭</td>
              </tr>
              <tr>
                <td width="70px">픽업장소</td>
                <td>하늘마당</td>
              </tr>
              <tr>
                <td width="70px">배달비</td>
                <td>6000원</td>
              </tr>
            </table>
          </form>
          <img src={pradak} alt={df} />
        </span>
        <span></span>
      </div>
      <div className="fourdiv">
        <span className="chimg">
          <form>
            <table border="1" width="250px" align="right">
              <tr>
                <td width="70px">상호명</td>
                <td>교촌치킨</td>
              </tr>
              <tr>
                <td width="70px">픽업장소</td>
                <td>하늘마당</td>
              </tr>
              <tr>
                <td width="70px">배달비</td>
                <td>6000원</td>
              </tr>
            </table>
          </form>
          <img src={gyochon} alt={df} />
        </span>
        <span></span>
      </div>
      <div className="fivediv">
        <form>
          <table border="1" width="250px" align="right">
            <tr>
              <td width="70px">상호명</td>
              <td>후라이드 참 잘하는 집</td>
            </tr>
            <tr>
              <td width="70px">픽업장소</td>
              <td>하늘마당</td>
            </tr>
            <tr>
              <td width="70px">배달비</td>
              <td>6000원</td>
            </tr>
          </table>
        </form>
        <span className="chimg">
          <img src={cham} alt={df} />
        </span>
        <span></span>
      </div>
    </div>
  );
}

export default MenuChicken;

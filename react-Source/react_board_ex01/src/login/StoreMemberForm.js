import React, { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddressPopup from "./storeAddress/AddressPopup";
import DaumPostcode from "react-daum-postcode";
import "./StoreMemberForm.css";

const StoreMemberForm = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const pwchRef = useRef();
  const nameRef = useRef();
  const pnameRef = useRef();
  const phoneRef = useRef();
  const categoryRef = useRef();
  const addressRef = useRef();
  const operationHourRef = useRef();
  const closedDayRef = useRef();
  const deliveryFeeRef = useRef();

  const navigate = useNavigate();

  const handleMember = () => {
    var str,
      i,
      ch = "";
    if (idRef.current.value === "" || idRef.current.value === undefined) {
      alert("사업자 등록 번호를 입력해주세요.");
      idRef.current.focus();
      return false;
    } else {
      str = idRef.current.value;
      if (str.length < 10 || str.length > 15) {
        alert("사업자 등록 번호 길이를 확인해주세요.");
        idRef.current.value.focus();
        return false;
      }
    }

    if (pwRef.current.value === "" || pwRef.current.value === undefined) {
      alert("비밀번호를 입력해주세요.");
      pwRef.current.focus();
      return false;
    } else {
      str = pwRef.current.value;
      if (str.length < 8 || str.length > 15) {
        alert("패스워드 길이를 확인해주세요 (8 ~ 15자리)");
        pwRef.current.value.focus();
        return false;
      } else {
        for (i = 0; i < str.length; i++) {
          ch = str.substring(i, i + 1);
          if (
            !(
              (ch >= "0" && ch <= "9") ||
              (ch >= "a" && ch <= "z") ||
              (ch >= "A" && ch <= "Z")
            )
          ) {
            alert("특수문자를 포함할 수 없습니다");
            pwRef.current.value.focus();
            return false;
          }
        }
      }
    }

    if (pwchRef.current.value === "" || pwchRef.current.value === undefined) {
      alert("비밀번호 확인을 해주세요");
      pwchRef.current.focus();
      return false;
    } else if (!(pwchRef.current.value === pwRef.current.value)) {
      alert("비밀번호와 비밀번호 확인이 다릅니다.");
      pwchRef.current.focus();
      return false;
    }

    if (nameRef.current.value === "" || nameRef.current.value === undefined) {
      alert("이름을 입력해주세요.");
      nameRef.current.focus();
      return false;
    }

    if (pnameRef.current.value === "" || pnameRef.current.value === undefined) {
      alert("전화번호를 입력해주세요.");
      pnameRef.current.focus();
      return false;
    } else {
      const str = phoneRef.current.value;
      for (var i = 0; i < str.length; i++) {
        const ch = str.substring(i, i + 1);
        if (
          !(ch >= "0" && ch <= "9") ||
          (ch >= "a" && ch <= "z") ||
          (ch >= "A" && ch <= "Z")
        ) {
          alert("전화번호는 숫자로만 입력해주세요.");
          phoneRef.current.focus();
          return false;
        }
      }
    }

    if (phoneRef.current.value === "" || phoneRef.current.value === undefined) {
      alert("가게 전화번호를 입력해주세요.");
      phoneRef.current.focus();
      return false;
    } else {
      const str = phoneRef.current.value;
      for (var i = 0; i < str.length; i++) {
        const ch = str.substring(i, i + 1);
        if (
          !(ch >= "0" && ch <= "9") ||
          (ch >= "a" && ch <= "z") ||
          (ch >= "A" && ch <= "Z")
        ) {
          alert("전화번호는 숫자로만 입력해주세요.");
          phoneRef.current.focus();
          return false;
        }
      }
    }

    if (
      categoryRef.current.value === "" ||
      categoryRef.current.value === undefined
    ) {
      alert("카테고리를 선택해주세요.");
      categoryRef.current.focus();
      return false;
    }

    if (
      addressRef.current.value === "" ||
      addressRef.current.value === undefined
    ) {
      alert("주소를 입력해주세요.");
      addressRef.current.focus();
      return false;
    }

    if (
      operationHourRef.current.value === "" ||
      operationHourRef.current.value === undefined
    ) {
      alert("오픈 시간을 입력해주세요.");
      operationHourRef.current.focus();
      return false;
    } else {
      const str = operationHourRef.current.value;
      for (var i = 0; i < str.length; i++) {
        const ch = str.substring(i, i + 1);
        if (
          !(ch >= "0" && ch <= "9") ||
          (ch >= "a" && ch <= "z") ||
          (ch >= "A" && ch <= "Z")
        ) {
          alert("오픈 시간은 숫자로만 입력해주세요.");
          operationHourRef.current.focus();
          return false;
        }
      }
    }

    if (
      closedDayRef.current.value === "" ||
      closedDayRef.current.value === undefined
    ) {
      alert("휴무일을 입력해주세요.");
      closedDayRef.current.focus();
      return false;
    }

    if (
      deliveryFeeRef.current.value === "" ||
      deliveryFeeRef.current.value === undefined
    ) {
      alert("배달비를 입력해주세요.");
      deliveryFeeRef.current.focus();
      return false;
    } else {
      const str = deliveryFeeRef.current.value;
      for (var i = 0; i < str.length; i++) {
        const ch = str.substring(i, i + 1);
        if (
          !(ch >= "0" && ch <= "9") ||
          (ch >= "a" && ch <= "z") ||
          (ch >= "A" && ch <= "Z")
        ) {
          alert("배달비는 숫자로만 입력해주세요.");
          deliveryFeeRef.current.focus();
          return false;
        }
      }
    }

    axios
      .post("http://localhost:8008/storemember", {
        store_id: idRef.current.value,
        store_pw: pwRef.current.value,
        store_name: nameRef.current.value,
        store_pname: pnameRef.current.value,
        store_phone: phoneRef.current.value,
        store_category: categoryRef.current.value,
        store_address: addressRef.current.value,
        store_operationHour: operationHourRef.current.value,
        store_closedDay: closedDayRef.current.value,
        store_deliveryFee: deliveryFeeRef.current.value,
      })
      .then((res) => {
        console.log("handleMember : ", res);
        if (res.data.affectedRows === 1) {
          alert("회원 등록에 성공했습니다.");
        } else {
          alert("회원 등록에 실패했습니다.");
        }
        navigate("/storelogin");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(data);
    addressRef.current.value = fullAddress;
    console.log(data.zonecode);
    closePostCode();
  };

  return (
    <div className="form">
      <h1 align="center" className="logo3">
        가게 회원가입
      </h1>
      <div className="scroll1">
        {/* <td width="100px">사업자 등록 번호</td> */}
        <div className="div112">사업자 등록번호</div>
        <input
          type="text"
          name="id"
          size="20"
          defaultValue=""
          ref={idRef}
          className="sgaip_id"
          maxLength="10"
          autoComplete="off"
          placeholder="사업자 등록번호를 입력해주세요"
        />
        <div className="div112" id="sgaip_pwdiv">
          비밀번호
        </div>

        <input
          placeholder="비밀번호를 입력해주세요"
          type="password"
          name="pw"
          size="20"
          defaultValue=""
          ref={pwRef}
          className="sgaip_pw"
          autoComplete="off"
        />
        <div className="div112" id="sgaip_pwchdiv">
          비밀번호 확인
        </div>
        <input
          type="password"
          name="pw"
          size="20"
          className="sgaip_pw"
          defaultValue=""
          autoComplete="off"
          ref={pwchRef}
          placeholder="비밀번호를 입력해주세요."
        />
        {/* <td width="100px">가게명</td> */}
        <div className="div112" id="sgaip_namediv">
          가게명
        </div>

        <input
          placeholder="가게명을 입력해주세요"
          type="text"
          name="name"
          size="20"
          defaultValue=""
          ref={nameRef}
          className="sgaip_name"
          autoComplete="off"
        />
        <div className="div112" id="sgaip_pnamediv">
          업주명
        </div>

        <input
          placeholder="업주명을 입력해주세요"
          type="text"
          name="pname"
          size="20"
          defaultValue=""
          ref={pnameRef}
          autoComplete="off"
          className="sgaip_pname"
        />

        {/* <td width="100px">가게 번호</td> */}
        <div className="div112" id="sgaip_phonediv">
          가게 전화번호
        </div>

        <input
          placeholder="가게 전화번호를 입력해주세요"
          type="text"
          name="phone"
          size="20"
          defaultValue=""
          autoComplete="off"
          ref={phoneRef}
          className="sgaip_phone"
        />

        <div className="div112" id="sgaip_opendiv">
          오픈 시간
        </div>

        <input
          placeholder="오픈시간을 입력해주세요"
          type="text"
          name="operationHour"
          size="50"
          defaultValue=""
          autoComplete="off"
          ref={operationHourRef}
          className="sgaip_ohour"
        />
        <div className="div112" id="sgaip_closediv">
          휴무일
        </div>

        <input
          placeholder="휴무일을 입력해주세요"
          type="text"
          name="closedDay"
          size="20"
          defaultValue=""
          ref={closedDayRef}
          className="sgaip_rest"
          autoComplete="off"
        />
        <div className="div112" id="sgaip_deliverydiv">
          배달비
        </div>

        <input
          placeholder="배달비를 입력해주세요"
          type="text"
          name="deliveryFee"
          size="20"
          defaultValue=""
          autoComplete="off"
          ref={deliveryFeeRef}
          className="sgaip_dfee"
        />
        <div className="div112" id="sgaip_categorydiv">
          음식 카테고리
        </div>
        <div className="div112" id="sgaip_categorydiv">
          <select ref={categoryRef} id="category_select">
            <option value="">음식 카테고리 선택</option>
            <option value="chicken">치킨</option>
            <option value="pizza">피자</option>
            <option value="korean">한식</option>
            <option value="sandwitch">샌드위치</option>
            <option value="chinese">중식</option>
            <option value="japanese">일식</option>
            <option value="desert">디저트</option>
            <option value="cafe">카페</option>
            <option value="porkfoot">족발</option>
          </select>
        </div>
        <div className="div112">
          주소
          {/* 버튼 클릭 시 팝업 생성 */}
          <button
            type="button"
            className="address_search"
            onClick={openPostCode}
          >
            우편번호 검색
          </button>
        </div>
        {/* 팝업 생성 기준 div */}
        <div id="popupDom">
          {isPopupOpen && (
            <AddressPopup>
              <div>
                <DaumPostcode onComplete={handlePostCode} />
                {/* 닫기 버튼 생성 */}
                <button
                  type="button"
                  className="close"
                  onClick={() => {
                    closePostCode();
                  }}
                >
                  닫기
                </button>
              </div>
            </AddressPopup>
          )}
        </div>

        <input
          type="text"
          className="sgaip_dtime"
          name="address"
          size="20"
          defaultValue=""
          autoComplete="off"
          ref={addressRef}
          onClick={() => {
            alert("우편번호 검색을 이용해주세요");
            return false;
          }}
          onChange={() => {
            alert("우편번호 검색을 이용해주세요");
            addressRef.current.value = "";
            return false;
          }}
          placeholder="우편번호 검색을 이용해주세요."
        />
      </div>
      <br />
      <br />
      <div className="storelogin_form">
        <input
          type="button"
          value="뒤로 가기"
          className="gologin1"
          onClick={() => {
            navigate("/storelogin");
          }}
        />
        <input
          type="button"
          value="회원 등록"
          onClick={handleMember}
          className="sgaip_button"
        />
      </div>
    </div>
  );
};

export default StoreMemberForm;

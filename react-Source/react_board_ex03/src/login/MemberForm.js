import React, { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddressPopup from './storeAddress/AddressPopup';
import DaumPostcode from "react-daum-postcode";

const MemberForm = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const pwchRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();

  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true)
  }

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false)
  }

  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    console.log(data)
    addressRef.current.value = fullAddress
    console.log(data.zonecode)
    closePostCode()
  }

  const handleMember = () => {
    var str, i, ch = "";
    if (idRef.current.value === '' || idRef.current.value === undefined) {
      alert('아이디를 입력해주세요.');
      idRef.current.focus();
      return false;
    }
    else {
      str = idRef.current.value;
      if (str.length < 8 || str.length > 15) {
        alert("아이디 길이를 확인해주세요. (8 ~ 15자리)");
        idRef.current.focus();
        return false;
      }
      else {
        for (i = 0; i < str.length; i++) {
          ch = str.substring(i, i + 1);
          if (!((ch >= "0" && ch <= "9") || (ch >= "a" && ch <= "z")
            || (ch >= "A" && ch <= "Z"))) {
            alert("특수문자를 포함할 수 없습니다");
            idRef.current.focus();
            return false;
          }
        }
      }
    }
    if (pwRef.current.value === '' || pwRef.current.value === undefined) {
      alert('비밀번호를 입력해주세요.');
      pwRef.current.focus();
      return false;
    } else {
      str = pwRef.current.value;
      if (str.length < 8) {
        alert("패스워드 길이를 확인해주세요 (8자리 이상)");
        pwRef.current.focus();
        return false;
      }
      else {
        for (i = 0; i < str.length; i++) {
          ch = str.substring(i, i + 1);
          if (!((ch >= "0" && ch <= "9") || (ch >= "a" && ch <= "z")
            || (ch >= "A" && ch <= "Z"))) {
            alert("특수문자를 포함할 수 없습니다");
            pwRef.current.focus();
            return false;
          }
        }
      }
    }

    if (pwchRef.current.value === '' || pwchRef.current.value === undefined) {
      alert('비밀번호 확인을 해주세요');
      pwchRef.current.focus();
      return false;
    } else if (!(pwchRef.current.value === pwRef.current.value)) {
      alert('비밀번호와 비밀번호 확인이 다릅니다.');
      pwchRef.current.focus();
      return false;
    }

    if (nameRef.current.value === '' || nameRef.current.value === undefined) {
      alert('이름을 입력해주세요.');
      nameRef.current.focus();
      return false;
    }
    if (emailRef.current.value === '' || emailRef.current.value === undefined) {
      alert('이메일을 입력해주세요.');
      emailRef.current.focus();
      return false;
    }
    //  else {
    //   const str = emailRef.current.value;
    //   for (var i = 0; i < str.length; i++) {
    //     const ch = str.substring(i, i + 1);
    //     if (ch !== /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/) {
    //       alert('이메일을 정확히 입력해주세요.');
    //       emailRef.current.focus();
    //       return false;
    //     }
    //   }
    // }

    if (addressRef.current.value === '' || addressRef.current.value === undefined) {
      alert('주소를 입력해주세요.');
      addressRef.current.focus();
      return false;
    }
    if (phoneRef.current.value === '' || phoneRef.current.value === undefined) {
      alert('전화번호를 입력해주세요.');
      phoneRef.current.focus();
      return false;
    } else {
      const str = phoneRef.current.value;
      for (var i = 0; i < str.length; i++) {
        const ch = str.substring(i, i + 1);
        if (!(ch >= "0" && ch <= "9") || ((ch >= "a" && ch <= "z")
          || (ch >= "A" && ch <= "Z"))) {
          alert('전화번호는 숫자로만 입력해주세요.');
          phoneRef.current.focus();
          return false;
        }
      }
    }

    axios
      .post('http://localhost:8008/member', {
        user_id: idRef.current.value,
        user_pw: pwRef.current.value,
        user_name: nameRef.current.value,
        user_email: emailRef.current.value,
        user_address: addressRef.current.value,
        user_phone: phoneRef.current.value
      })
      .then((res) => {
        console.log('handleMember : ', res);
        if (res.data.affectedRows === 1) {
          alert('회원 등록에 성공했습니다.');
        } else {
          alert('아이디가 중복됩니다.')
        }
        navigate('/login');
      })
      .catch((e) => {
        console.error(e);
      })
  }

  return (
    <div>
      <br />
      <h1 align='center'>개인 회원가입</h1>
      <form>
        <table border='1' width='500px' align='center'>
          <thead>
            <tr>
              <td width='100px'>아이디</td>
              <td align='left' width='200px'>
                <input
                  type='text'
                  name='id'
                  size='20'
                  defaultValue=''
                  autoComplete='off'
                  ref={idRef}
                  placeholder='아이디를 입력해주세요.'
                />
              </td>
            </tr>
            <tr>
              <td width='100px'>비밀번호</td>
              <td align='left' width='200px'>
                <input
                  type='password'
                  name='pw'
                  size='20'
                  defaultValue=''
                  autoComplete='off'
                  ref={pwRef}
                  placeholder='비밀번호를 입력해주세요.'
                />
              </td>
            </tr>
            <tr>
              <td width='100px'>비밀번호 확인</td>
              <td align='left' width='200px'>
                <input
                  type='password'
                  name='pw'
                  size='20'
                  defaultValue=''
                  autoComplete='off'
                  ref={pwchRef}
                  placeholder='비밀번호를 입력해주세요.'
                />
              </td>
            </tr>
            <tr>
              <td width='100px'>이름</td>
              <td align='left' width='200px'>
                <input
                  type='text'
                  name='name'
                  size='20'
                  defaultValue=''
                  autoComplete='off'
                  ref={nameRef}
                  placeholder='이름을 입력해주세요.'
                />
              </td>
            </tr>
            <tr>
              <td width='100px'>이메일</td>
              <td align='left' width='200px'>
                <input
                  type='text'
                  name='email'
                  size='20'
                  defaultValue=''
                  autoComplete='off'
                  ref={emailRef}
                  placeholder='aischool@example.com'
                />
              </td>
            </tr>
            <tr>
              <td width='100px'>주소</td>
              <td align='left' width='200px'>
                <input
                  type='text'
                  name='address'
                  size='20'
                  defaultValue=''
                  autoComplete='off'
                  ref={addressRef}
                  onClick={
                    () => {
                      alert('우편번호 검색을 이용해주세요');
                      return false;
                    }
                  }
                  onChange={
                    () => {
                      alert('우편번호 검색을 이용해주세요');
                      addressRef.current.value = '';
                      return false;
                    }
                  }
                  placeholder='우편번호 검색을 이용해주세요.'
                />
                {/* 버튼 클릭 시 팝업 생성 */}
                <button type='button' onClick={openPostCode}>우편번호 검색</button>
                {/* 팝업 생성 기준 div */}
                <div id='popupDom'>
                  {isPopupOpen && (
                    <AddressPopup>
                      <div>
                        <DaumPostcode onComplete={handlePostCode} />
                        {/* 닫기 버튼 생성 */}
                        <button type='button' onClick={() => { closePostCode() }}>닫기</button>
                      </div>
                    </AddressPopup>
                  )}
                </div>
              </td>
            </tr>
            <tr>
              <td width='100px'>전화번호</td>
              <td align='left' width='200px'>
                <input
                  type='text'
                  name='phone'
                  size='20'
                  defaultValue=''
                  autoComplete='off'
                  ref={phoneRef}
                  placeholder='전화번호를 입력해주세요.'
                />
              </td>
            </tr>
            <tr>
              <td colSpan='2' align='center'>
                <input
                  type='button'
                  value='뒤로 가기'
                  className="gologin"
                  onClick={() => { navigate('/login'); }}
                />
                <input
                  type='button'
                  value='회원 등록'
                  onClick={handleMember}
                />
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </div>
  );
};

export default MemberForm;
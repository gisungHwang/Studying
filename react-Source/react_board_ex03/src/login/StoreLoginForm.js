import React from 'react';
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StoreLoginForm = () => {
  const idRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();

  const handleLogin = () => {
    if (idRef.current.value === '' || idRef.current.value === undefined) {
      alert('사업자 등록 번호를 입력해주세요.');
      idRef.current.focus();
      return false;
    }
    if (pwRef.current.value === '' || pwRef.current.value === undefined) {
      alert('비밀번호를 입력해주세요.');
      pwRef.current.focus();
      return false;
    }

    console.log(
      'LoginForm : window.sessionStorage(login_id) : ',
      window.sessionStorage.getItem('id')
    );

    axios
      .post('http://localhost:8008/storelogin', {
        store_id: idRef.current.value,
        store_pw: pwRef.current.value
      })
      .then((res) => {
        console.log('handleLogin : ', res.data[0]);
        if (res.data[0].cnt === 1) {
          window.sessionStorage.setItem('id', idRef.current.value);
          navigate('/storeboard');
        } else {
          alert('아이디와 비밀번호를 확인해주세요.')
          navigate('/storelogin');
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleMemberForm = () => {
    navigate('/storemember');
    // useNavigate를 이용해서 /member로 이동하도록 지정
  };

  return (
    <div>
      <br />
      <h1 align='center'>기업 로그인</h1>
      <form>
        <table border='1' width='300px' align='center'>
          <thead>
            <tr>
              <td width='100px'>사업자 등록 번호</td>
              <td align='left' width='200px'>
                <input
                  type='text'
                  name='id'
                  size='20'
                  defaultValue=''
                  ref={idRef}
                  placeholder='사업자 등록 번호를 입력해주세요.'
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
                  ref={pwRef}
                  placeholder='비밀번호를 입력해주세요.'
                />
              </td>
            </tr>
            <tr>
              <td colSpan='2' align='center'>
                <input
                  type='button'
                  value='로그인'
                  onClick={handleLogin}
                />
                &nbsp;
                <input
                  type='button'
                  value='회원 등록'
                  onClick={handleMemberForm}
                />
                &nbsp;
                <input
                  type='button'
                  value='개인 로그인'
                  onClick={() => { navigate('/login'); }}
                />
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </div>
  );
};

export default StoreLoginForm;
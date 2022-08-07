
import React from 'react';
import './Test1.scss';
import Case from './img/case.png';
import {Link} from 'react-router-dom';
import Instr from './img/INSTR.png';
import Trim from './img/TRIM.png';

//08.04
const Test1 = () => {
    return (
        <div>
            <div className='legeno'>
            <h1 align='center'>리액트로 복습하기test3</h1>
            </div>
        
        <fieldset className='go'>
            <legend>MYSQL</legend>
                {/* <Link to ="/test2">08.03</Link><br/>
                <Link to = "/test3">08.04</Link><br/> */}
                <Link to = "/">HOME</Link><br/>
                <Link to = "/Project/gisung">뒤로가기</Link><br/><br/>
                {/* <Link to = "articles">게시글 목록</Link> */}
                <h1><code>MYSQL 내장함수</code></h1>
                
                
                <h2>내장함수</h2>
                <ul>
                    <li>
                        흐름 함수, 문자열 함수, 수학 함수, 날짜/시간 함수, 전체 텍스트 검색 함수, 형 변환 함수, XML 함수, 비트 함수, 보안/압축 함 수, 정보 함수, 공간 분석 함수, 기타 함수 등<br/>
                    </li>
                </ul>
                
                <h2>제어 흐름 함수</h2>
                <ul>
                    <li>IF (수식, 참, 거짓)</li><br/>
                    <li>IFNULL(수식1, 수식2)<br/> -수식1이 NULL이 아니면 수식1이 반환되고 수식1이 NULL이면 수식2가 반환</li><br/>
                    <li>CASE ~ WHEN ~ ELSE ~ END<br/>-CASE는 내장 함수는 아니며 연산자(Operator)로 분류</li>
                    <img src={Case} alt='loading..'></img><br/>

                    <h3>IFNULL(수식1, 수식2)</h3>
                <li>수식1이 NULL이 아니면 수식1이 반환되고 수식1이 NULL이면 수식2가 반환</li><br/>
                </ul>
            
                <h2>문자열 함수</h2>
                <li>CONCAT() : 문자열을 이어줌<br/>-CONCAT(문자열1, 문자열2,…)</li><br/>
                <li>CONCAT_WS( ) : 구분자와 함께 문자열을 이어주는 역할<br/>-CONCAT_WS(구분자, 문자열1, 문자열2,…)</li><br/>

                <h3>FORMAT(숫자, 소수점 자릿수)</h3>
                <li>숫자를 소수점 아래 자릿수까지 표현, 1,000단위마다 콤마 표시해줌 </li><br/>

                <h3>INSERT(기준 문자열, 위치, 길이, 삽입할 문자열)</h3>
                <li>기준 문자열의 위치부터 길이만큼 지우고 삽입할 문자열 끼워 넣음</li><br/>
                <img src={Instr} alt='loading..' ></img><br/>

                <h3>LEFT(문자열, 길이), RIGHT(문자열, 길이)</h3>
                <li>왼쪽 또는 오른쪽에서 문자열의 길이만큼 반환</li><br/>

                <h3>LPAD(문자열, 길이, 채울 문자열), RPAD(문자열, 길이, 채울 문자열)</h3>
                <li>문자열을 길이만큼 늘린 후에 빈 곳을 채울 문자열로 채움</li><br/>

                <h3>TRIM(문자열), TRIM(방향 자를_문자열 FROM 문자열)</h3>
                <img src={Trim} alt='loading..' ></img><br/>

                <h3> SUBSTRING(문자열, 시작위치, 길이) 또는 SUBSTRING(문자열 FROM 시작위치 FOR 길이)</h3>
                <li>시작위치부터 길이만큼 문자를 반환, 길이가 생략되면 문자열의 끝까지 반환</li><br/>

                <h2>수학 함수</h2>
                <li>CEILING(숫자), FLOOR(숫자), ROUND(숫자)</li>
                <li>올림, 내림, 반올림 계산</li><br/>

                <h2>날짜 및 시간 함수</h2>
                <li>NOW( ), SYSDATE( ) : 현재 ‘연-월-일 시 : 분 : 초</li>
                <li>now(), date(now()), time(now())</li>

                
        
        </fieldset>
        </div>
    );
};

export default Test1;
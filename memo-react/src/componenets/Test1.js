import React from 'react';
import './Test1.scss';
import date from './date1.png';
import {Link} from 'react-router-dom';

const Test1 = () => {
    return (
        <div>
            <div className='legeno'>
            <h1 align='center'>리액트로 복습하기</h1>
            </div>
        
        <fieldset className='go'>
            <legend>MYSQL</legend>
                
                <h3><code>SQL의 분류</code></h3>
                <Link to ="/test2">버튼</Link><br/>
                <Link to = "/Project/velopert">버튼2</Link><br/>
                <Link to = "/Project/gisung">버튼3</Link><br/>
                <Link to = "articles">게시글 목록</Link>
                <ul>
                    <li>DML (Data Manipulation Language, 데이터 조작 언어)<br/>-데이터를 조작(선택, 삽입, 수정, 삭제)하는 데 사용되는 언어<br/>-SELECT, INSERT, UPDATE, DELETE</li><br/>
                    <li>DDL (Data Definition Language, 데이터 정의 언어)<br/>-데이터베이스, 테이블, 뷰, 인덱스 등의 데이터베이스 개체를 생성/삭제/변경하는 역할<br/>-CREATE, DROP, ALTER</li><br/>
                    <li>DCL (Data Control Language, 데이터 제어 언어)<br/>-사용자에게 어떤 권한을 부여하거나 빼앗을 때 주로 사용하는 구문<br/>-GRANT/REVOKE/DENY</li>
                </ul><br/>
            
                <h3>SELECT문</h3>
                <ul>
                    <li>ANY,SOME<br/>-ANY는 SOME와 동일한 의미로 서브쿼리의 여러 개의 결과 중 한 가지만 만족해도 가능</li><br/>
                    <li>ALL<br/>- 서브쿼리의 결과 중 여러 개의 결과를 모두 만족해야 가능</li><br/>
                    <li>ORDER BY<br/>-출력되는 순서를 조절하는 구문<br/>-ASC는 오름차순(디폴트값으로 생략가능)<br/>-DESC는 내림차순</li><br/>
                    <li>DISTINCT<br/>-중복된 것을 1개씩만 출력해주는 구문</li><br/>
                    <li>LIMIT<br/>-MYSQL의 부담을 줄여주기 위해 출력개수를 제한해주는 구문</li><br/>
                </ul><br/>

                <h3>GROUP BY문</h3>
                <ul>
                    <li>HAVING<br/>-Where와 비슷한 개념으로 조건을 제한하는 구문<br/>-having절은 꼭 group by절 다음에 나와야함</li><br/>
                    <li>ROLLUP<br/>-총합 or 중간합계가 필요한 경우 사용하는 구문</li><br/>
                </ul>

                <h3>INSERT문</h3>
                <ul>
                    <li>-예제: insert [into] 테이블[(열1, 열2, ...)] values(값1, 값2 ...)</li><br/>
                </ul>

                <h3>UPDATE문</h3>
                <ul>
                    <li>-예제: update 테이블이름 set 열1=값1, 열2=값2 ... where 조건;<br/>-update 테이블명 set 컬럼명='바뀔컬럼명'where 조건;<br/>-where절 생략 가능하나 where절 생략하면 테이블의 전체 행의 내용 변경되므로 주의</li><br/>
                </ul>

                <h3>DELETE문</h3>
                <ul>
                    <li>-예제: delete from 테이블이름 where 조건;<br/>-where절 생략되면 전체 데이터를 삭제함<br/>-DDL문의 DROP과 TRUNCATE와는 다르게 ROLLBACK를 사용하여 되돌리기가 가능</li><br/>
                </ul>

                <h3>ALTER문</h3>
                <ul>
                    <li>-컬렴명 변경 예제: alter table 테이블명 rename column 변경할 컬럼명 to 변경될 컬럼명;</li><br/><br/>
                </ul>

                <h3>MYSQL에서 지원하는 데이터 형식의 종류</h3>
                <img className='hihi' src={date} alt='loading..'></img>
            

        </fieldset>
        </div>
    );
};

export default Test1;


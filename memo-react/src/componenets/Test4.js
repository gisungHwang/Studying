
import React from 'react';
import './Test1.scss';
import {Link} from 'react-router-dom';
import INNER from './img/INNER JOIN.png';
import INNER1 from './img/이너조인예시.png';
import INNER2 from './img/이너조인예시결과.png';

//08.05
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
                <h1><code>MYSQL 명령어</code></h1>
                
                <h3>JOIN</h3>
                <li>두 개 이상의 테이블을 서로 묶어서 하나의 결과 집합으로 만들어 내는 것</li>
                <li>종류 : INNER JOIN, OUTER JOIN, CROSS JOIN, SELF JOIN</li><br/>

                <h3>INNER JOIN(내부 조인)</h3>
                <li>조인 중에서 가장 많이 사용되는 조인</li>
                <li>JOIN만 써도 INNER JOIN으로 인식함</li>
                <li>equal join이라고도 불림 </li><br/>
                <img src={INNER} alt='loading..'></img><br/>
                <img src={INNER1} alt='loading..'></img><br/>
                <img src={INNER2} alt='loading..'></img><br/>

                <h3>OUTER JOIN(외부 조인)</h3>
                <li>조인의 조건에 만족되지 않는 행까지도 포함시키는 것</li><br/>

                <h3>SELF JOIN(자체 조인)</h3>
                <li>자기 자신과 자기 자신이 조인한다는 의미</li><br/>

                <h3>DB 생성 및 삭제</h3>
                <li>CREATE DATABASE DB명</li>
                <li>DROP DATABASE DB명</li><br/>

                <h3>테이블 삭제</h3>
                <li>Drop tabel 테이블명</li><br/>

                <h3>테이블 수정</h3>
                <li>Alter tabel 테이블명</li><br/>

                <h3>열 삭제</h3>
                <li>alter table 테이블이름 drop 컬럼 컬럼명</li>

          

                
        
        </fieldset>
        </div>
    );
};

export default Test1;
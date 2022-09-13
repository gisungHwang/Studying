
import React from 'react';
import './Test1.scss';
import date from './img/date1.png';
import {Link} from 'react-router-dom';

//복습페이지
const Test1_1 = () => {
    return (
        <div>
            <div className='legeno'>
            <h1 align='center'>리액트로 복습하기</h1>
            </div>
        
        <fieldset className='go'>
            <legend>날짜별 복습현황</legend>
                <Link to ="/">HOME</Link><br/><br/>
                <Link to ="/test2">08.03 (MySQL)</Link><br/>
                <Link to = "/Project/velopert">08.04 (MySQL)</Link><br/>
                <Link to = "/test4">08.05 (MySQL)</Link><br/>
                <Link to = "/test5">09.06 (Python)</Link><br/>
                {/* <Link to = "/Project/velopert">복습</Link><br/> */}<br/>
                {/* <Link to = "/Project/gisung">버튼3</Link><br/><br/>
                <Link to = "articles">게시글 목록</Link><br/> */}

        </fieldset>
        </div>
    );
};

export default Test1_1;
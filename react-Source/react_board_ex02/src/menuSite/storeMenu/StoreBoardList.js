import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CategorySlide from '../CategorySlide/CategorySlide';
// import axios from '/axios';
import BoardArticle from './StoreBoardArticle';
import PageLink from './StorePageLink';
import './StoreBoardArticle.scss'

const StoreBoardList = ({
  boardlist,
  handlelist,
  handlepage,
  pagelink,
  url
}) => {

  var title = url

  if (url === 'chicken') {
    title = '치킨'
  } else if (url === 'burger') {
    title = '햄버거'
  } else if (url === 'korean') {
    title = '한식'
  } else if (url === 'pizza') {
    title = '피자'
  } else if (url === 'sandwitch') {
    title = '샌드위치'
  } else if (url === 'chinese') {
    title = '중식'
  } else if (url === 'japanese') {
    title = '일식'
  } else if (url === 'dessert') {
    title = '디저트'
  } else if (url === 'cafe') {
    title = '카페'
  } else if (url === 'porkfood') {
    title = '족발'
  }

  const navigate = useNavigate();

  useEffect(() => {
    handlelist();
  }, []);

  const handleLogout = () => {
    console.log('handleLogout');
    window.sessionStorage.clear();
    // 세션에 저장된 로그인 정보를 지우며 로그아웃
    console.log(
      'handleLogout - window.sessionStorage(login_id) : ',
      window.sessionStorage.getItem('id')
    );
    navigate('/login'); // 로그아웃을 할 경우 로그인 페이지로 이동
  };

  if (boardlist.boardList.length === 0) {
    return (
      <div>
        <h1 align='center'>{title}</h1>
        <div className="categoryslide">
          <CategorySlide />
        </div>
        <table width='700px' border='1' align='center'>
          <thead>
            <tr>
              <td colSpan='7' align='center'>
                <input
                  type='button'
                  value='로그아웃'
                  onClick={handleLogout}
                />
                <input
                  type='button'
                  value='카테고리 이동'
                  onClick={() => navigate('/main')}
                />
              </td>
            </tr>
          </thead>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <h1 align='center'>{title}</h1>
        <table width='700px' border='1' align='center'>
          <thead>
            <div className="categoryslide">
              <CategorySlide />
            </div>
            {boardlist.boardList.map((article) => {
              // state -1 구문
              console.log('야아아아아아아아아', article.store_id)
              return (
                <div className='chicken_tbl'>
                  <BoardArticle
                    url={url}
                    article={article}
                    key={article.store_id}
                    handlelist={handlelist}
                  />
                </div>
              )
            })}
            <tr>
              <th colSpan='7'>
                <input
                  type='button'
                  value='로그아웃'
                  onClick={handleLogout}
                />
                <input
                  type='button'
                  value='카테고리 이동'
                  onClick={() => navigate('/main')}
                />
              </th>
            </tr>
          </thead>
        </table>
        <table align='center'>
          <tfoot>
            <br />
            <tr>
              <td align='center'>
                {pagelink.map((page) => {
                  return (
                    <PageLink
                      page={page}
                      key={page}
                      handlepage={handlepage}
                    />
                  )
                })}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
};

export default StoreBoardList;
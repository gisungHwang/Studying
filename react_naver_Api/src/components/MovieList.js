import axios from 'axios';
import React, { useCallback, useRef, useState } from 'react';
import MovieItem from './MovieItem';
// import MovieListBlock from './MovieListBlock';
import './MovieList.scss'

const MovieList = () => {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(false);

    const Ref1 = useRef();
    const Ref2 = useRef(0);
    const Ref3 = useRef();
    const Ref4 = useRef();
    const Ref5 = useRef();
    const Ref6 = useRef(null);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();

            Ref6.current?.scrollIntoView({ behavior: 'smooth' });

            const fetchData = async () => {
                const NAVER_CLIENT_ID = 'SPW_iLqHpIeAA3MQiJHH';
                const NAVER_CLIENT_SECRET = 'KMQWDX_p6k';

                setLoading(true);

                try {
                    const response = await axios.get(
                        '/v1/search/movie',
                        {
                            params: {
                                query: Ref1.current.value, // 이미지 검색 텍스트
                                genre: Ref2.current.value,
                                country: Ref3.current.value,
                                yearfrom: Ref4.current.value,
                                yearto: Ref5.current.value,
                                start: 1, // 검색 시작 위치
                                display: 100, // 가져올 이미지 개수
                            },
                            headers: {
                                'X-Naver-Client-Id': NAVER_CLIENT_ID,
                                'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
                            },
                        });
                    setItems(response.data);
                } catch (e) {
                    console.log(e);
                }
                setLoading(false);
            };
            fetchData();
        },
        []
    );

    // if (loading) {
    //     return (
    //         '영화를 불러오는 중 입니다...'
    //     );
    // }

    // if (!items) {
    //     return null;
    // }

    return (
        <div className='searchs'>
            <div className="wrapper">
                <div className="focus"></div>
                <div className="mask">
                    <div className="text">
                        <span className='m'>M</span>
                        <span className='o1'>o</span>
                        <span className='o2'>o</span>
                        <span className='g'>g</span>
                        <span className='l'>l</span>
                        <span className='e'>e</span>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='search_form'>
                <input
                    type='text'
                    ref={Ref1}
                    placeholder='🔍'
                />
                <br />
                <select
                    ref={Ref2}   //className='select_1'
                >
                    <option value="">장르 선택</option>
                    <option value="0">전체</option>
                    <option value="1">드라마</option>
                    <option value="2">판타지</option>
                    <option value="3">서부</option>
                    <option value="4">공포</option>
                    <option value="5">로맨스</option>
                    <option value="6">모험</option>
                    <option value="7">스릴러</option>
                    <option value="8">느와르</option>
                    <option value="9">컬트</option>
                    <option value="10">다큐멘터리</option>
                    <option value="11">코미디</option>
                    <option value="12">가족</option>
                    <option value="13">미스터리</option>
                    <option value="14">전쟁</option>
                    <option value="15">애니메이션</option>
                    <option value="16">범죄</option>
                    <option value="17">뮤지컬</option>
                    <option value="18">SF</option>
                    <option value="19">액션</option>
                    <option value="20">무협</option>
                    <option value="21">에로</option>
                    <option value="22">서스펜스</option>
                    <option value="23">서사</option>
                    <option value="24">블랙코미디</option>
                    <option value="25">실험</option>
                    <option value="26">영화카툰</option>
                    <option value="27">영화음악</option>
                    <option value="28">영화패러디포스터</option>
                </select>
                <select
                    ref={Ref3}
                >
                    <option value="">국가 선택</option>
                    <option value="KR">한국</option>
                    <option value="JP">일본</option>
                    <option value="US">미국</option>
                    <option value="HK">홍콩</option>
                    <option value="GB">영국</option>
                    <option value="FR">프랑스</option>
                    <option value="ETC">기타</option>
                </select>
                <select
                    ref={Ref4}
                >
                    <option value="">첫 번째 제작년도</option>
                    <option value="1960">1960년도</option>
                    <option value="1970">1970년도</option>
                    <option value="1980">1980년도</option>
                    <option value="1990">1990년도</option>
                    <option value="2000">2000년도</option>
                    <option value="2010">2010년도</option>
                    <option value="2020">2020년도</option>
                </select>
                <select
                    ref={Ref5}
                >
                    <option value="">두 번째 제작년도</option>
                    <option value="1960">1960년도</option>
                    <option value="1970">1970년도</option>
                    <option value="1980">1980년도</option>
                    <option value="1990">1990년도</option>
                    <option value="2000">2000년도</option>
                    <option value="2010">2010년도</option>
                    <option value="2020">2020년도</option>
                </select>
                <br />
                {/* <button type='submit'>검색</button> */}
            </form>
            <div className='block_div' ref={Ref6}>
                {/* <MovieListBlock> */}
                {items &&
                    items.items.map((item) => {
                        return (
                            <MovieItem
                                key={item.link}
                                item={item}
                            />
                        );
                    })}
                {/* </MovieListBlock> */}
            </div>
        </div>
    );
};

export default MovieList;
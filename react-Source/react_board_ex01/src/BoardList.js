import {useEffect} from 'react';
import BoardArticle from "./BoardArticle";

const BoardList = () => {
    if(1) {
        return (
        <div>
            <table width="700px" border="1" align="center">
            <thead>
            <tr>
            <td width="60">번호</td>
            <td width="240">제목</td>
            <td width="100">작성자</td>
            <td width="100">작성일</td>
            <td width="200">수정/삭제</td>
            </tr>
            </thead>
            </table>
        </div>
        );
    } else {
        return(
            <div>
            <table width="700px" border="1" align='center'>
            <thead>
            <tr>
            <td width="60">번호</td>
            <td width="240">제목</td>
            <td width="100">작성자</td>
            <td width="100">작성일</td>
            <td width="200">수정/삭제</td>
            </tr>
            </thead>
            <tbody>
                <BoardArticle />
            </tbody>
            </table>
            </div>
        )
    }
};

export default BoardList;
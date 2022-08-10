import axios from "axios";

const BoardArticle = () => {
    return (
        <tr>
            <td>BOARD_VUM</td>
            <td>
            <a href = "#">BOARD_TITLE</a>
            </td>
            <td>BOARD_WRITER</td>
            <td>BOARD_DATE</td>
            <td align="center">
            <input type = "button" value="수정"></input>
            <input type = "button" value="삭제"></input>
            </td>
        </tr>
    );
};

export default BoardArticle;
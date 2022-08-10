const BoardUpdateForm = () => {
    return(
        <div>
            <form>
                <table border="1" width="700px" align="center">
                    <tr>
                        <td width="100px">제목</td>
                        <td align="left" width="600px">
                            <input
                                type="text"
                                name="board_title"
                                defaultValue="board_title"
                            ></input>
                        </td>
                    </tr>
                    <tr>
                        <td width="100px">글쓴이</td>
                        <td align="left" width="600px">
                            <input
                                type="text"
                                name="board_content"
                                defaultValue="board_content"
                            ></input>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="center">
                            <input type="button" value="글수정"></input>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default BoardUpdateForm;
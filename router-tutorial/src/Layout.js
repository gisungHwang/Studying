import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();
    
    const goBack = () => {
        navigate(-1);
    }

    const goJump = () => {
        navigate(+1);
    }
    const goArticles = () => {
        // navigate('/articles'); 밑에 replace를 사용하면 페이지를 이동할 때 현재 페이지를 페이지 기록에 남기지 않아 뒤로가기 누르면 바로 홈으로 가버림
        navigate("/articles", {
            replace: true
        });
    };

    return (
        <div>
        <div align="center">
            <header style={{ background: 'gray', padding: 6, fontSize: 24,}}>홈페이지 만들기<br/>
            <button onClick={goBack} >뒤로가기</button>
            <button onClick={goJump}> 앞으로 가기</button><br/>
            <button onClick={goArticles}>게시글 목록</button>
            </header>
        </div>
        <div>
        <main>
            <Outlet/>
        </main>
        </div>
        </div>
    );
};

export default Layout;
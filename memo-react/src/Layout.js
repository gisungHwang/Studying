import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header style={{background: 'lightgray', padding: 16, fontSize: 24}}>헤더입니다</header>
        
        <main>
            <Outlet/>
        </main>
        </div>
    );
};

export default Layout;
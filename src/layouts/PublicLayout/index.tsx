import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function PublicLayout() {
    return (
        <div>
            <h1>Public Layout</h1>
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default PublicLayout;
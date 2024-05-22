import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Navbar/Navbar";
// import Test from "../pages/Navbar/Test";


const Root = () => {
    return (
        <div>
            <div  className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                {/* <Test></Test> */}
                <Outlet></Outlet>
            </div>
        <Footer></Footer>
        </div>
    );
};

export default Root;
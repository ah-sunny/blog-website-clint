import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div className=" h-screen w-[90%]  flex justify-center items-center text-center gap-2">

            <div>
                <h1 className="mx-auto text-cente text-5xl font-bold ">{error.statusText || error.message}</h1>
                <img className="h-62 " src="https://i.ibb.co/wCsCLsL/opps04.jpg" />
                {/* <img src="https://i.ibb.co/44tbb6g/oops.jpg"  /> */}


                <p>{error?.data}</p>
            </div>
            <div className="">
            {
                    error.status === 404 &&
                    <div>
                        <h1 className="text-5xl font-bold">404 Error</h1>
                        {/* <p>Page Not Found</p> */}
                        <img className="h-96" src="https://i.ibb.co/ZWXZ5nZ/404-man.jpg" alt="" />
                    </div>
                }
                <p>Go Back to HomePage</p>
                <Link to='/'>
                    <button className="btn btn-warning text-bold mt-4">Home Page</button>
                </Link>

            </div>
        </div>
    );
};

export default ErrorPage;
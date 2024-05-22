import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/404Page/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/LogIn/Login";
import Register from "../pages/Register/Register";
import AddBlog from "../pages/addBlog/AddBlog";
import AllBlog from "../pages/all-blog/AllBlog";
import DetailsBlog from "../pages/all-blog/DetailsBlog";
import EditedPage from "../pages/all-blog/EditedPage";
import FeaturedBlogs from "../pages/featuredBlogs/FeaturedBlogs";
import Profile from "../pages/profile/Profile";
import Wishlist from "../pages/wishlist/Wishlist";
import PrivateRoute from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>, 
            }, 
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allBlog',
                element: <AllBlog></AllBlog>,
                loader:async()=> await fetch('https://blog-website-server-pink-eight.vercel.app/wishlist')
            },
            {
                path: '/addBlog',
                element: <PrivateRoute> <AddBlog></AddBlog></PrivateRoute>
            },
            {
                path: '/featuredBlogs',
                element: <FeaturedBlogs></FeaturedBlogs>,
                loader:async()=> await fetch('https://blog-website-server-pink-eight.vercel.app/allblogs')
            },
            {
                path:'/wishlist',
                element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
            },
            {
                path: `/allBlogs/detailsPage/:id`,
                element: <DetailsBlog></DetailsBlog>,
                loader: ({params})=> fetch(`https://blog-website-server-pink-eight.vercel.app/allblogs/${params.id}`)
            },
            {
                path: `/allBlogs/detailsPage/editPage/:id`,
                element: <PrivateRoute><EditedPage></EditedPage></PrivateRoute>,
                loader: ({params})=> fetch(`https://blog-website-server-pink-eight.vercel.app/allblogs/${params.id}`)
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
            
        ] 
    }    
]);

export default router;
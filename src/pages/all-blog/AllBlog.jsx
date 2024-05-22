import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import swal from "sweetalert";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAuxiosSecure";
import ShowBlogs from "./ShowBlogs";

const AllBlog = () => {
    const axiosSecure = useAxiosSecure()
    const [blogs, setBlogs] = useState([])
    const [wishlistBlog, setWishData] = useState([])
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    // console.log(user)

    useEffect(() => {
        axiosSecure.get('/allblogs')
            .then(res => setBlogs(res.data))
    }, [axiosSecure])

    useEffect(() => {
        axiosSecure.get('/wishlist', {withCredentials: true})
            .then(res => setWishData(res.data))
    }, [axiosSecure])


    const handleWishlistBtn = (id) => {
        const selectItem = blogs.find(item => item?._id === id)
        const alreadyExists = wishlistBlog.find(item => item?._id === selectItem?._id)

        const { _id, title, image, short_description, category, long_description } = selectItem;
        const targetItem = { email: user?.email, _id, title, image, short_description, category, long_description }
        // console.log(targetItem)

        if (user) {

            if (!alreadyExists) {
                // console.log('newBlog', targetItem)
                axiosSecure.post('/wishlist', targetItem)
                    .then(res => {
                        // console.log('in post responsee', res.data)
                        if (res.data.insertedId) {
                            const addedBolg = [...wishlistBlog, targetItem]
                            // console.log("after add", addedBolg)
                            setWishData(addedBolg)

                            swal({
                                title: "Successfully!",
                                text: "Added this blog in Wishlist !",
                                icon: "success",
                                button: "okay!",
                            });
                        }
                    })
            } else {
                toast.error('Already added this blog in wishlist')
            }
        } else {
            navigate('/login')
        }
    }

    return (
        <div>

            <div className="grid grid-cols-1 gap-7 mt-9">
                {
                    blogs.map((blog, idx) => <ShowBlogs
                        key={idx}
                        blog={blog}
                        handleWishlistBtn={handleWishlistBtn}>

                    </ShowBlogs>)
                }
            </div>

            <ToastContainer></ToastContainer>

        </div>
    );
};

export default AllBlog;
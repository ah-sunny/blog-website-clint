import { useEffect, useState } from "react";
import swal from "sweetalert";
import useAxiosSecure from "../../hooks/useAuxiosSecure";
import ShowBlogs from "./ShowWishlist";


const Wishlist = () => {
    const axiosSecure = useAxiosSecure()
    const [wishlistBlog, setWishlistBlog] = useState([])
    
    useEffect(() => {
        axiosSecure.get('/wishlist' , {withCredentials: true})
            .then(res => setWishlistBlog(res.data))
    }, [axiosSecure])

    const handleDeleteBlog = (_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover blog!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    // const selectItem = wishlistBlog.find(item => item?._id === _id)

                    // if (user?.email === selectItem?.email) {
                        // console.log("correct",user?.email ,"select email : ",selectItem?.email )

                        axiosSecure.delete(`/wishlist/${_id}`)
                            .then(res => {
                                if (res?.data?.deletedCount > 0) {
                                    swal(" Your wishlist blog has been deleted!", {
                                        icon: "success",
                                    });
                                    const remaining = wishlistBlog.filter(item => item._id !== _id);
                                    console.log("remaing-wishlist",remaining)
                                    setWishlistBlog(remaining);
                                }
                            })
                    
                }
            });
    }

    return (
        <div>
            <h1 className="font-bold italic text-xl my-10">Your favourite Blog list </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-7 mb-20">
                {
                    wishlistBlog.map((blog, idx) => <ShowBlogs
                        key={idx}
                        blog={blog}
                        handleDeleteBlog={handleDeleteBlog} ></ShowBlogs>)
                }
            </div>
        </div>
    );
};

export default Wishlist;
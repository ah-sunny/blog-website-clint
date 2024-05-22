import { useContext, useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAuxiosSecure";
import CommentSection from "./CommentSection";
import ShowComment from "./ShowComment";


const DetailsBlog = () => {
    const loadderBlog = useLoaderData()
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [comments, setComment] = useState([])

    const { _id, title, image, short_description, category, long_description } = loadderBlog;
    const photo = [image]
    const targetComments = comments.filter(item => item?.blogId === _id)



    useEffect(() => {
        axiosSecure.get('/blogComment')
            .then(res => setComment(res.data))
    }, [axiosSecure])

    const checkOwnPost = (user?.email === loadderBlog?.email)

    // console.log('comment',comment)
    const handleUpdateBlog = (id) => {
        // console.log('hitted', id)
        navigate(`/allBlogs/detailsPage/editPage/${id}`)
    }
    const handlecomment = (e) => {
        e.preventDefault();
        const comment = e.target.comment.value
        const { displayName, photoURL } = user
        const blogId = _id
        const commentBlog = { blogId, displayName, photoURL, comment }
        // console.log(comment ,commentBlog)
        if (checkOwnPost) {
            toast.error("Can not Comment Your Own Blog")
            return;
        }

        axiosSecure.post('/blogComment', commentBlog)
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    swal({
                        title: "Added",
                        text: "Your comment Added successfully!",
                        icon: "success",
                        button: "okay!",
                    });

                    const newAddedComment  = [...comments,commentBlog]
                    setComment(newAddedComment)
                }
                e.target.reset()
            })

    }

    return (
        <div>
            <div className="w-full lg:w-[80%] bg-base-100 mx-auto shadow-2xl mt-7 mb-7 p-5 space-y-4 rounded-md border-2 ">
                <div className="flex justify-between">
                    <h1 className=" text-xl lg:text-4xl font-bold">{title}</h1>
                    <div className="">
                        <button onClick={() => handleUpdateBlog(_id)} className="btn btn-outline btn-primary ">Edit Blog</button>
                    </div>
                </div>
                <p className="text-base lg:text-xl font-bold ">{category}</p>

                <PhotoProvider speed={() => 800}
                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')} >
                        <div className="foo">
                            {photo.map((item, index) => (
                                <PhotoView src={item} key={index}>
                                <img className='rounded-2xl' src={item} style={{ objectFit: 'cover' }} alt="" />
                              </PhotoView>
                            ))}
                        </div>  
                    </PhotoProvider>

                {/* <div >
                    <img className="mx-auto text-center rounded-md w-full" src={image} />
                </div> */}
                <p className="font-semibold"> {short_description}</p>
                <p className=" text-base lg:text-lg">{long_description}</p>

                <div><p className="underline font-bold italic my-7 ">Comments : </p></div>
                <div>
                    {
                        targetComments.map((commentProps, idx) => <ShowComment
                            key={idx} commentProps={commentProps} ></ShowComment>)
                    }
                </div>

            </div>
            <div >
                <CommentSection handlecomment={handlecomment} ></CommentSection>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DetailsBlog;
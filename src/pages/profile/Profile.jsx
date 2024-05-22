import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAuxiosSecure";
import ShowComment from "../all-blog/ShowComment";



const Profile = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [comments , setComment] = useState([])
   

    const targetComments = comments.filter(item => item?.displayName ===  user?.displayName)
    console.log(comments, targetComments)


    useEffect(() => {
        axiosSecure.get('/blogComment')
            .then(res => setComment(res.data))
    }, [axiosSecure])


    return (
        <div className=" border-2 rounded-2xl p-5 my-3 mb-7 mx-auto">

            <div className="w-full mx-auto text-center">
                <div className="avatar online ">
                    <div className="h-48 text-center  rounded-full">
                        <img className=" " src={user?.photoURL} />
                    </div>
                </div>
            </div>

        <div className="mx-auto text-center mt-3 mb-15">
            <h1 className="lg:text-5xl font-extrabold italic" >{user?.displayName
}</h1>
        </div>


        <div className=" mt-6">
            <h1>Your Comment : ---------</h1>

<div className="mt-15 mb-10">
   {
    targetComments.map((commentProps, idx) => <ShowComment key={idx}
    commentProps={commentProps}
    ></ShowComment>)
   }
    
</div>
        </div>


        </div>
    );
};

export default Profile;
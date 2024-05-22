import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAuxiosSecure";


const EditedPage = () => {
    const loadedEditBlog = useLoaderData();
    const {  title, image, short_description, category, long_description } = loadedEditBlog;
    const {user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()


    const handleUpdateBlog = (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
            const title = form.get('title');
            const category = form.get('category');
            const image = form.get('image');
            const short_description = form.get('short_description');
    
            const long_description = form.get('long_description');
         
    
            const Blog = { title, category, image, short_description,long_description}
            // console.log(Blog);

            if (user?.email === loadedEditBlog?.email) {

            
            axiosSecure.put(`/allblogs/${loadedEditBlog._id}`, Blog)
                .then(res => {
                    // console.log(res.data);
                    if (res.data.modifiedCount > 0) {
                        swal({
                            title: "Updated",
                            text: "Your Blog is updated successfully!",
                            icon: "success",
                            button: "okay!",
                        });
                    }
                })
            }else{
                toast.error("Only owner can edit this Blog")
            }

    }

    return (
        <div>

            <h1 className="text-2xl font-bold text-center mt-10">Edit Your Blog</h1>
            <form onSubmit={handleUpdateBlog} className="w-full my-10 border-2 rounded-2xl  p-3 lg:p-10 shadow-2xl space-y-3 ">
                {/* 1st row */}
                <div className="flex justify-between flex-col lg:flex-row gap-10">
                    <div className="form-control lg:w-[47%]">
                        <label className="label">
                            <span className="text-xl font-bold">Item Name :</span>
                        </label>
                        <input type="text" name="title" defaultValue={title} placeholder="Enter your item name" className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-[47%]">
                        <label className="label">
                            <span className="text-xl font-bold">Category Name:</span>
                        </label>
                        {/* <input type="text" name="subcategory_Name" defaultValue={category} placeholder="Enter category " className="input input-bordered" required /> */}
                        <select defaultValue={category} name="category" className="select select-success w-full max-w-xs">
                            <option disabled selected>Category name </option>
                            <option value='Technology' >Technology</option>
                            <option value='Lifestyle' >Lifestyle</option>
                            <option value='Health' >Health</option>
                            <option value='Food' >Food</option>
                            <option value='Travel' >Travel</option>
                            <option value='Business' >Business</option>
                            <option value='Finance' >Finance</option>
                          
                        </select>
                    </div>
                </div>
                {/* 2nd row */}
                <div className="flex justify-between flex-col lg:flex-row gap-10">
                    <div className="form-control lg:w-[47%]">
                        <label className="label">
                            <span className="text-xl font-bold">Image URl :</span>
                        </label>
                        <img className=" h-auto rounded-md my-3"  src={image} alt="" />
                        <input type="text" defaultValue={image} name="image" placeholder="Enter your Image URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-[47%]">
                        <label className="label">
                            <span className="text-xl font-bold">Short discription:</span>
                        </label>
                        <textarea className="textarea textarea-success textarea-lg " name="short_description" defaultValue={short_description} placeholder=" discription" rows="3" cols="30" ></textarea>
                    </div>
                </div>

                {/*  */}
                <div>
                    <div className="form-control lg:w-[47%]">
                        <label className="label">
                            <span className="text-xl font-bold">Long Discription :</span>
                        </label>
                        <textarea className="textarea textarea-success textarea-lg " name="long_description" defaultValue={long_description} placeholder="write discription about this blog"
                        rows="6" cols="30" ></textarea>
                        
                    </div>

                </div>

                <div className="text-center mx-auto">
                    <button className="btn btn-success font-semibold text-white">Update Item</button>
                </div>

            </form>
<ToastContainer/>
        </div>
    );
};

export default EditedPage;
import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAuxiosSecure";


const AddBlog = () => {
const {user } = useContext(AuthContext)
const axiosSecure = useAxiosSecure()

// console.log(user)
const handleAddNewBlog = (event)=>{

    event.preventDefault();
    const form = new FormData(event.currentTarget);
        const title = form.get('title');
        const category = form.get('category');
        const image = form.get('image');
        const short_description = form.get('short_description');
        const long_description = form.get('long_description');
        const email = user?.email
        const displayName = user?.displayName;
        const photoURL = user?.photoURL
     

        const Blog = {displayName,photoURL,email, title, category, image, short_description,long_description}
        // console.log(Blog);

        axiosSecure.post('/allblogs', Blog)
                .then(res => {
                    // console.log(res.data);
                    if (res.data.insertedId) {
                        swal({
                            title: "Added",
                            text: "Your Blog is Added successfully!",
                            icon: "success",
                            button: "okay!",
                        });
                    }
                    event.target.reset()
                })
}

    return (
        <div>

            <h1 className="text-xl lg:text-2xl font-bold text-center mt-10">Write Your Blog & Publish</h1>
            <form onSubmit={handleAddNewBlog} className="w-full my-10 border-2 rounded-2xl p-3 lg:p-10 shadow-2xl space-y-3 ">
                {/* 1st row */}
                <div className="flex justify-between flex-col lg:flex-row gap-10">
                    <div className="form-control w-full lg:w-[47%]">
                        <label className="label">
                            <span className="text-base lg:text-xl font-bold">Item Name :</span>
                        </label>
                        <input type="text" name="title" placeholder="Enter your item name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full lg:w-[47%]">
                        <label className="label">
                            <span className="text-base lg:text-xl font-bold">Category Name:</span>
                        </label>
                        {/* <input type="text" name="subcategory_Name" defaultValue={category} placeholder="Enter category " className="input input-bordered" required /> */}
                        <select  name="category" className="select select-success w-full max-w-xs" required >
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
                    <div className="form-control w-full lg:w-[47%]">
                        <label className="label">
                            <span className="text-base lg:text-xl font-bold">Image URl :</span>
                        </label>
                        {/* <img className=" h-auto rounded-md my-3"  src='' alt="" /> */}
                        <input type="text" name="image" placeholder="Enter your Image URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full lg:w-[47%]">
                        <label className="label">
                            <span className="text-base lg:text-xl font-bold">Short discription:</span>
                        </label>
                        <textarea className="textarea textarea-success textarea-lg " name="short_description"  placeholder=" discription" rows="3" cols="30" required ></textarea>
                    </div>
                </div>

                {/*  */}
                <div>
                    <div className="form-control w-full lg:w-[47%]">
                        <label className="label">
                            <span className="text-base lg:text-xl font-bold">Long Discription :</span>
                        </label>
                        <textarea className="textarea textarea-success textarea-lg " name="long_description" placeholder="write discription about this blog"
                        rows="6" cols="30" required ></textarea>
                        
                    </div>

                </div>

                <div className="text-center mx-auto">
                    <button className="btn btn-success font-semibold text-white">Publish</button>
                </div>

            </form>


        </div>
    );
};

export default AddBlog;
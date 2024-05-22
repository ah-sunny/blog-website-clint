import { useLoaderData } from "react-router-dom";
import ShowFeaturesBlog from "./ShowFeaturesBlog";


const FeaturedBlogs = () => {
    const loadedAllBlog = useLoaderData()

    const longDisArray  =  loadedAllBlog.sort((a, b) => b.long_description.length - a.long_description.length);

    return (
        <div >
           <h1 className="text-xl font-semibold my-14 underline">Here all Blog are sorting with their length : </h1>


            <div className="my-10"> 
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                Serial Number
                                </th>
                                <th>Blog Owner</th>
                                <th>Blog Title</th>
                                <th>Category</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                           
                           {
                            longDisArray.map((feature,idx)=> <ShowFeaturesBlog 
                            key={idx} 
                            feature={feature}
                            Sl_num={idx + 1}></ShowFeaturesBlog> )
                           }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBlogs;
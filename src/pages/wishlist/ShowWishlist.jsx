import { Button } from '@mui/joy';
import PropTypes from 'prop-types';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useNavigate } from 'react-router-dom';


const ShowBlogs = ({ blog,handleDeleteBlog }) => {

    const { _id, title, image, category } = blog;
    const photo = [image]
    const navigate = useNavigate()



    return (
        <div>

            <div className="card card-compact w-80 h-96 bg-base-100 shadow-xl">

            <div className='w-[95%] mx-auto text-center h-[50%]'> 
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
            </div>

                {/* <figure><img className=" w-[75%] rounded-xl"
                    src={image} alt="image" /></figure> */}

                <div className="card-body h-[50%]">
                    <h2 className="card-title  lg:text-xl font-bold">{title}</h2>
                   
                        <div className="flex items-center text-sm gap-2"> Category : {category}  </div>

                    <div className='flex justify-between text-lg font-bold mt-5'>
                        <Button onClick={() => handleDeleteBlog(_id)} color="danger" size="sm" variant="soft" className='items-center space-x-2'> <span>delete : </span> <AiOutlineDelete/>  </Button>

                        <div onClick={()=>  navigate(`/allBlogs/detailsPage/${_id}`)} className='flex gap-2 items-center btn btn-ghost'>view details <MdOutlineTipsAndUpdates></MdOutlineTipsAndUpdates>  </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

ShowBlogs.propTypes = {
    blog: PropTypes.object,
    handleDeleteBlog: PropTypes.func,
}
export default ShowBlogs;
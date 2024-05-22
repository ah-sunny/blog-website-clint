import Button from '@mui/joy/Button';
import PropTypes from 'prop-types';
import { FaRegHeart } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useNavigate } from 'react-router-dom';

const ShowBlogs = ({ blog, handleWishlistBtn }) => {

    const { _id, title, image, short_description, category } = blog;
    const navigate = useNavigate()
    const photo = [image]
    const handleDetails = (id) => {
        // console.log(id)
        navigate(`/allBlogs/detailsPage/${id}`)
    }



    return (
        <div>

            <div className="card flex-col lg:card-side bg-base-100 shadow-xl mt-3">
                <div className='w-full lg:w-[40%] p-4 h-auto'>

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


                    {/* <figure className='h-full rounded-2xl'><img className='rounded-2xl h-auto'
                        src={image} alt="Movie" /></figure> */}

                </div>


                <div className="w-full lg:w-[40%] card-body ">
                    <h2 className="card-title text-xl lg:text-3xl font-bold pl-0">{title} </h2>
                    <p className='font-bold text-lg'>{category} </p>
                    <p className='text-sm lg:text-lg'>{short_description}</p>

                    <div className="card-actions justify-end">
                        <button onClick={() => handleDetails(_id)} className="btn btn-outline btn-primary">View Details</button>
                        <Button onClick={() => handleWishlistBtn(_id)} color="danger" size="lg" variant="soft" className='items-center space-x-2'> <FaRegHeart /> <span>Wishlist</span> </Button>

                    </div>
                </div>
            </div>

        </div>
    );
};

ShowBlogs.propTypes = {
    blog: PropTypes.object,
    handleWishlistBtn: PropTypes.func,
}
export default ShowBlogs;
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ShowFeaturesBlog = ({ feature,Sl_num }) => {
const navigate = useNavigate()
    const {_id, displayName,photoURL, title,  category,  } = feature;
    // console.log(Sl_num)
  
    return (

            <tr>
                <th>{Sl_num}</th>
                <td>
                    {
                        feature?.displayName ? 
                        <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{displayName}</div>
                            {/* <div className="text-sm opacity-50">United States</div> */}
                        </div>
                    </div>
                    :
                     ''
                    }
                </td>

                <td>
                    {title}
                </td>

                <td>{category}</td>
                <th>
                    <button onClick={()=> navigate(`/allBlogs/detailsPage/${_id}`) } className="btn btn-ghost btn-outline btn-success btn-sm">view</button>
                </th>
            </tr>
    );
};

ShowFeaturesBlog.propTypes = {
    feature: PropTypes.object,
    Sl_num: PropTypes.object,
    // handleWishlistBtn: PropTypes.func,
}

export default ShowFeaturesBlog;
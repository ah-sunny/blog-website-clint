import PropTypes from 'prop-types';

const CommentSection = ({handlecomment}) => {

    return (
        <div className="my-7 w-full">
            <form onSubmit={handlecomment} >
                <label className="label">
                    <span className="text-xl font-bold">Write your comment : </span>
                </label>
                <textarea className="textarea textarea-success w-[70%]  " name="comment" placeholder=" Your comment" rows="4" cols="30" required ></textarea>
               <div>
               <button className="btn btn-outline btn-success">comment</button>
               </div>
            </form>
        </div>
    );
};

CommentSection.propTypes = {
    handlecomment: PropTypes.func,
   
}

export default CommentSection;
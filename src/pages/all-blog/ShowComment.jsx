import PropTypes from 'prop-types';

const ShowComment = ({commentProps}) => {

    const {  displayName, photoURL, comment } = commentProps
    return (
        <div>
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={photoURL} />
                </div>
            </div>
            <div className="chat-header">
               {displayName}
            </div>
            <div className="chat-bubble">{comment}</div>
           
        </div>

    </div>
    );
};

ShowComment.propTypes = {
    commentProps: PropTypes.object,
}

export default ShowComment;
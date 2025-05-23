const SingleComment = ({ comment }) => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <p className="fw-bold m-0">{comment.comment}</p>
                    <small className="m-0">rating: {comment.rate}</small>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <button className="btn btn-outline-dark">E</button>
                    <button className="btn btn-outline-danger">D</button>
                </div>
            </div>
        </>
    );
};

export default SingleComment;
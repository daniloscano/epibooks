const SingleComment = () => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <p className="m-0">testo del commento</p>
                    <small className="m-0">rating: 4</small>
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
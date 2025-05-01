const CommentArea = () => {
    return (
        <>
            <div>
                <form>
                    <div className="d-flex flex-column gap-3">
                            <textarea
                                name="comment-text"
                                id="comment-text"
                                cols="30"
                                rows="3"
                                placeholder="Add a comment here..."
                            ></textarea>
                        <select name="comment-rating" id="comment-rating">
                            <option value="">Rate</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <div className="d-flex justify-content-end align-items-center gap-2">
                            <button type="submit" className="btn btn-warning">Add Comment</button>
                            <button type="reset" className="btn btn-outline-dark">Clear</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CommentArea;
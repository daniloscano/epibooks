import SingleComment from "./SingleComment.jsx";

const CommentsList = () => {
    return (
        <>
            <div className="d-flex w-100 flex-column gap-2">
                <SingleComment />
            </div>
        </>
    );
};

export default CommentsList;
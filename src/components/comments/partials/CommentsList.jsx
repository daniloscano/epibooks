import SingleComment from "./SingleComment.jsx";

const CommentsList = ({comments}) => {

    return (
        <>
            <div className="d-flex w-100 flex-column gap-2">
                {
                    comments.map((comment, index) => (
                        <SingleComment
                            key={`comment-${index}`}
                            comment={comment}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default CommentsList;
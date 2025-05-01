import CommentsList from "./partials/CommentsList.jsx";
import CommentArea from "./partials/CommentArea.jsx";
import {useContext, useEffect} from "react";
import {CommentsContext} from "../../contexts/CommentsContext.jsx";

const CommentsContainer = () => {
    const { selectedBook, comments, getBookComments } = useContext(CommentsContext)

    useEffect(() => {
        getBookComments(selectedBook)
    }, [selectedBook]);

    return (
        <>
            <div className="d-flex flex-column align-items-center gap-4">
                <h4>
                    Comments
                </h4>
                {
                    comments.length === 0 && (
                        <div>Select a Book</div>
                    )
                }
                {
                    comments.length !== 0 && (
                        <CommentsList
                            comments={comments}
                        />
                    )
                }
                <CommentArea />
            </div>
        </>
    );
};

export default CommentsContainer;
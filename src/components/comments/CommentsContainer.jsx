import CommentsList from "./partials/CommentsList.jsx";
import CommentArea from "./partials/CommentArea.jsx";

const CommentsContainer = () => {
    return (
        <>
            <div className="d-flex flex-column align-items-center gap-4">
                <h4>Nome Libro</h4>
                <CommentsList />
                <CommentArea />
            </div>
        </>
    );
};

export default CommentsContainer;
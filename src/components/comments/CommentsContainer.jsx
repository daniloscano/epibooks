import CommentsList from "./partials/CommentsList.jsx";
import CommentArea from "./partials/CommentArea.jsx";
import {useContext, useEffect} from "react";
import {CommentsContext} from "../../contexts/CommentsContext.jsx";
import {BooksContext} from "../../contexts/BooksContext.jsx";

const CommentsContainer = () => {
    const { books } = useContext(BooksContext)
    const { selectedBook, comments, getBookComments } = useContext(CommentsContext)

    useEffect(() => {
        getBookComments(selectedBook)
    }, [selectedBook]);

    return (
        <>
            <div className="d-flex flex-column align-items-center gap-4">
                <h5 className="text-center">
                    {
                        selectedBook === '' ? 'Comments' : books.find(book => book.asin === selectedBook).title
                    }
                </h5>

                {
                    selectedBook === '' && comments.length === 0 && (
                        <div>Select a Book</div>
                    )
                }
                {
                    selectedBook !== '' && comments.length === 0 && (
                        <div>No comments for this book</div>
                    )
                }
                {
                    selectedBook !== '' && comments.length !== 0 && (
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
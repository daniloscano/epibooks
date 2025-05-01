import {createContext} from "react";
import {useComments} from "../hooks/useComments.js";

export const CommentsContext = createContext();

export const CommentsProvider = ({children}) => {
    const { comments, setComments, getBookComments, selectedBook, setSelectedBook, error, isLoading } = useComments()



    return (
        <CommentsContext.Provider value={ {comments, setComments, getBookComments, selectedBook, setSelectedBook, error, isLoading}}>
            {children}
        </CommentsContext.Provider>
    )
}
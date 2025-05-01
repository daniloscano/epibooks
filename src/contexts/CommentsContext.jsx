import {createContext, useState} from "react";

export const CommentsContext = createContext();

export const CommentsProvider = ({children}) => {
    const [ selectedBook, setSelectedBook ] = useState(null)
    const [ commentsList, setCommentsList ] = useState([])



    return (
        <CommentsContext.Provider value={ {selectedBook, commentsList}}>
            {children}
        </CommentsContext.Provider>
    )
}
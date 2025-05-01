import {createContext} from "react";
import {useAllBooks} from "../hooks/useBooks.js";


export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
    const { books, setBooks, getAllBooks, error, isLoading } = useAllBooks()



    return (
        <BooksContext.Provider value={ {books, setBooks, getAllBooks, error, isLoading} }>
            {children}
        </BooksContext.Provider>
    )
}
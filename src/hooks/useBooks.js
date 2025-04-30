import {useEffect, useState} from "react";

const BOOKS_ENDPOINT = 'https://epibooks.onrender.com';

export const useAllBooks = () => {
    const [ books, setBooks ] = useState([])
    const [ error, setError ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)

    const getAllBooks = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(BOOKS_ENDPOINT)
            const data = await response.json()
            setBooks(data);
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    };

    useEffect(() => {
        getAllBooks();
    }, []);

    return { books, setBooks, getAllBooks, error, isLoading }
}
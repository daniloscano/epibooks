import {useState} from "react";

const COMMENTS_ENDPOINT = 'https://striveschool-api.herokuapp.com/api/books/';

export const useComments = () => {
    const [ comments, setComments ] = useState([])
    const [ selectedComment, setSelectedComment ] = useState({})
    const [ selectedBook, setSelectedBook ] = useState('')
    const [ error, setError ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)

    const getBookComments = async (asin) => {
        try {
            setIsLoading(true)
            const response = await fetch(`${COMMENTS_ENDPOINT}${asin}/comments`)
            const data = await response.json()
            setComments(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    };

    const postBookComment = async (newComment) => {

    };

    const editBookComment = async (selectedComment) => {
        /* method patch */
    };

    const deleteBookComment = async (selectedComment) => {

    };

    return {
        comments, setComments, getBookComments,
        selectedComment, setSelectedComment,
        selectedBook, setSelectedBook,
        error, isLoading
    }
}


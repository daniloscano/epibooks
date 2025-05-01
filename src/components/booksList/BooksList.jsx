import {Col, Container, Row} from "react-bootstrap";
import BookCard from "../bookCard/BookCard.jsx";
import {useContext, useEffect, useState} from "react";
import {BooksContext} from "../../contexts/BooksContext.jsx";

const BooksList = () => {

    const { books, setBooks, getAllBooks, error, isLoading } = useContext(BooksContext)
    const [ query, setQuery ] = useState('')

    const booksQuery = (e) => {
        setQuery(e.target.value)
    }

    const searchHandler = () => {
        setTimeout( () => {
            if (query === '') {
                getAllBooks()
            } else {
                const matchingBooks = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()))
                setBooks(matchingBooks)
            }
        }, 600)
    }

    useEffect(() => {
        searchHandler();

        return () => {
            clearTimeout(searchHandler)
        }
    }, [query]);

    return (
        <>
            <section>
                <Container>
                    <div className="d-flex w-50 mx-auto justify-content-center mb-5">
                        <input
                            type="text"
                            className="form-control"
                            value={query}
                            placeholder="Search your book..."
                            onChange={booksQuery}
                        />
                    </div>
                    <Row
                        className="gy-3"
                    >
                        {
                            isLoading && !error && !books && (
                                <div>Caricamento...</div>
                            )
                        }
                        {
                            !isLoading && error && (
                                <div>Errore!!!</div>
                            )
                        }
                        {
                            !isLoading && books && (
                                books.map((book, index) => (
                                    <Col
                                        sm={12}
                                        md={6}
                                        lg={4}
                                        key={`book-card-${index}`}
                                    >
                                        <BookCard
                                            book={book}
                                        />
                                    </Col>
                                )
                            )
                            )
                        }
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default BooksList;
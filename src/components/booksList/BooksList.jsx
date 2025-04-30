import {Col, Container, Row} from "react-bootstrap";
import BookCard from "../bookCard/BookCard.jsx";
import {useAllBooks} from "../../hooks/useBooks.js";

const BooksList = () => {

    const { books, error, isLoading } = useAllBooks();

    return (
        <>
            <section>
                <Container>
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
                                        lg={3}
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
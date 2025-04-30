import {Button, Card} from "react-bootstrap";
import './bookCard.css'
import {useState} from "react";

const BookCard = ({ book }) => {
    const [ selected, setSelected ] = useState(false)

    const selectBook = () => {
        setSelected(!selected)
    }

    return (
        <>
            <Card
                onClick={selectBook}
                className={ selected && 'border border-2 border-warning' }
            >
                <Card.Img className="card-img" variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title
                        className="text-truncate"
                    >
                        {book.title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{book.asin}</Card.Subtitle>
                    <Card.Text>
                        <strong>Category:</strong> {book.category}
                    </Card.Text>
                    <Button variant="warning">€ {Number(book.price).toFixed(2)}</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default BookCard;
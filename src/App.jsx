import Navigation from "./components/navigation/Navigation.jsx";
import Footer from "./components/footer/Footer.jsx";
import MainHeader from "./components/mainHeader/MainHeader.jsx";
import BooksList from "./components/booksList/BooksList.jsx";
import {Col, Container, Row} from "react-bootstrap";
import CommentsContainer from "./components/comments/CommentsContainer.jsx";

const App = () => {

    return (
        <>
            <Navigation />

            <MainHeader />

            <main>
                <Container fluid>
                    <Row>
                        <Col
                            sm={9}
                        >
                            <BooksList />
                        </Col>
                        <Col
                            sm={3}
                        >
                            <CommentsContainer />
                        </Col>
                    </Row>
                </Container>
            </main>

            <Footer />
        </>
    )
}

export default App

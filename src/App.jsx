import Navigation from "./components/navigation/Navigation.jsx";
import Footer from "./components/footer/Footer.jsx";
import MainHeader from "./components/mainHeader/MainHeader.jsx";
import BooksList from "./components/booksList/BooksList.jsx";

const App = () => {

  return (
    <>
        <Navigation />

        <MainHeader />

        <main>
            <BooksList />
        </main>

        <Footer />
    </>
  )
}

export default App

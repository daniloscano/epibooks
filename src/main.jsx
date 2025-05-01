import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import {BooksProvider} from "./contexts/BooksContext.jsx";
import {CommentsProvider} from "./contexts/CommentsContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BooksProvider>
            <CommentsProvider>
                <App />
            </CommentsProvider>
        </BooksProvider>
    </StrictMode>,
)

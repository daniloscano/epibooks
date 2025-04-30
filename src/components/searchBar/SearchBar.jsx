import {useState} from "react";

const SearchBar = () => {
    const [query, setQuery] = useState('')

    return (
        <>
            <div className="container w-50 d-flex justify-content-center mb-5">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search your book..."
                    value={query}
                    onChange={''}
                />
            </div>
        </>
    );
};

export default SearchBar;
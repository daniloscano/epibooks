import {navLinks} from "./partials/navLinks.js";
import NavigationLink from "./partials/NavigationLink.jsx";

const Navigation = () => {
    return (
        <>
            <nav>
                <div className="container-fluid d-flex align-items-center gap-5 p-3">
                    <div className="navigation-brand">
                        <a
                            className="text-decoration-none"
                            href="#"
                        >
                            EpiBooks
                        </a>
                    </div>
                    <div className="navigation-links">
                        <ul className="list-unstyled d-flex gap-4 mb-0">
                            {
                                navLinks.map((link, index) => (
                                    <NavigationLink
                                        key={`navigation-link-${index}`}
                                        link={link}
                                    />
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
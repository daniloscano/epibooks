const NavigationLink = ({ link }) => {
    return (
        <>
             <li>
                 <a
                     className="text-decoration-none"
                     href={link.href}
                 >
                     {link.text}
                 </a>
             </li>
        </>
    );
};

export default NavigationLink;
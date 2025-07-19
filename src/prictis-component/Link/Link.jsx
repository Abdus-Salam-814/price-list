const Link = ({link}) => {
    // console.log(link)
    return (
        <li className="text-2xl text-blue-400 hover:text-blue-950 duration-1000 cursor-pointer hover:bg-sky-300 font-extrabold px-12 rounded-2xl">
            {link.name}
        </li>
    );
};

export default Link;
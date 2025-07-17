const MyLink = ({route}) => {
 
    const {name, id, path} = route;

    return (
        <li><a className="text-2xl text-blue-300" href={path}>{name}</a></li>
    );
};

export default MyLink;
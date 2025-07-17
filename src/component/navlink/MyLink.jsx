import PropTypes from "prop-types";

const MyLink = ({route}) => {
 
    // const {name,  path} = route;

    return (
        <li><a className="text-2xl text-blue-300" href={route.path}>{route.name}</a></li>
    );
};

MyLink.protoType = {
    route: PropTypes.object, 
}
export default MyLink;
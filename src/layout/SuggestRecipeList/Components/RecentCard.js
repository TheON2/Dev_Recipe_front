import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
const RecentCard = ({ imageUrl, title, nickName, style }) => {
    return (_jsx(_Fragment, { children: _jsx(Link, { to: '/Detail', children: _jsxs(Card, { style: style ? style : { width: "200px", height: "300px", margin: "10px" }, children: [_jsx(Card.Img, { variant: "top", src: imageUrl ? imageUrl : "https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg", style: { height: "200px" } }), _jsxs(Card.Body, { children: [_jsx(Card.Title, { children: title ? title : "대강 맛있는 요리 이름" }), _jsx(Card.Text, { children: nickName ? nickName : "Cook Master" })] })] }) }) }));
};
export default RecentCard;

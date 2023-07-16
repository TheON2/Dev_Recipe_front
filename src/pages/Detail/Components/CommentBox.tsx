import React from 'react';
import {Figure, Image} from "react-bootstrap";
import {Container2} from "../style";

const CommentBox = ({profileUrl,nickName,createdAt,comment}) => {
    return (
        <Container2>
            <Figure style={{display:"flex"}}>
                <Image
                    src={"https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"}
                    style={{width: '10%', height: '100%',margin:"10px"}}
                    roundedCircle
                />
                <Figure.Caption>
                    <div style={{display:"flex",gap:"10px"}}>
                        <h3>{nickName ? nickName : "User"}</h3> <a style={{margin:"0 5px"}}>2023-07-01 01:36</a>
                    </div>
                    <a style={{margin:"10px"}}>{comment? comment : "행복하게 살고싶다~~"}</a>
                </Figure.Caption>
            </Figure>
        </Container2>
    );
};

export default CommentBox;

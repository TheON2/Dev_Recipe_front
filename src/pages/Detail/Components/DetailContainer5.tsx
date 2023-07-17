import React from 'react';
import {Container2} from "../style";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import {Figure, Image} from "react-bootstrap"
import CommentBox from "./CommentBox";
import {RootState} from "../../../type/local";
import {useSelector} from "react-redux";

const DetailContainer5 = ({comments,recipeId}) => {

    return (
        <Container2
            id="maincontent"
            style={{
                minHeight: "400px",
                backgroundColor: "white",
                margin: "20px",
                padding: "20px",
                height:"400px",
                overflow:"auto"
            }}
        >
            <div style={{margin:"0",padding:"0"}}>
                <h3>Comment {comments.length}</h3>
            </div>
            {comments.map((comment, index) => (
                <CommentBox key={index} comment={comment.content} recipeId={recipeId} commentId={comment.id} nickName={comment.writerEmail}/>
            ))}
        </Container2>
    );
};

export default DetailContainer5;

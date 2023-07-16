import React, {useCallback} from 'react';
import {Container2} from "../style";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import {Image} from "react-bootstrap"
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";
import {ADD_COMMENT} from "../../../redux/reducers/recipeSlice";
import useInput from "../../../hooks/useInput";
import {v4 as uuidv4} from 'uuid'

const DetailContainer6 = ({nickName, imageUrl,recipeId}) => {
    const dispatch = useDispatch();
    const [comment, onComment,setComment] = useInput<string>("")
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        const sendData = {recipeId,
            comment:{
                recipeId,
                comment,
                commentId:uuidv4(),
                writerEmail:"userA@naver.com"
            }}
        dispatch(ADD_COMMENT(sendData))
        setComment("")
    }, [dispatch, comment]);

    return (
        <Container2
            id="maincontent"
            style={{
                minHeight: "200px",
                height: "200px",
                backgroundColor: "white",
                margin: "20px",
                padding: "20px"
            }}
        >
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formGridEmail">
                    <Form.Label>Comment</Form.Label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={4} style={{width: "97%", resize: "none"}}
                                      value={comment} onChange={onComment}
                        />
                    </Form.Group>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container2>
    );
};

export default DetailContainer6;

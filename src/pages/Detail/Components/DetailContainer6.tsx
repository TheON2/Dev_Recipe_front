import React, { useCallback } from "react";
import { Container2 } from "../style";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import useInput from "../../../hooks/useInput";
import { v4 as uuidv4 } from "uuid";
import { UserState } from "../../../redux/reducers/userSlice";
import { RootState } from "../../../type/local";
import { useMutation, useQueryClient } from "react-query";
import { addComment } from "../../../api/recipes";

const DetailContainer6 = ({ recipeId }) => {
  const [comment, onComment, setComment] = useInput<string>("");
  const { user }: { user: UserState["user"] } = useSelector(
    (state: RootState) => state.user
  );
  const queryClient = useQueryClient();
  const { mutate: addComment_mutate } = useMutation(addComment, {
    onMutate: async (newComment) => {
      const oldData = queryClient.getQueryData(["comment", recipeId]);
      queryClient.setQueryData(["comment", recipeId], (old: any) => [
        ...old,
        newComment.comment,
      ]);
      return { oldData };
    },
    onError: (err, newComment, context) => {
      queryClient.setQueryData(["comment", recipeId], context.oldData);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["comment", recipeId]);
    },
  });

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const newComment = {
        recipeId,
        comment: {
          recipeId,
          comment,
          commentId: uuidv4(),
          writerEmail: user.email,
        },
      };
      addComment_mutate(newComment);
      setComment("");
    },
    [comment, user.email, recipeId, addComment_mutate, setComment]
  );

  return (
    <Container2
      id="maincontent"
      style={{
        minHeight: "200px",
        height: "200px",
        backgroundColor: "white",
        margin: "20px",
        padding: "20px",
      }}
    >
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formGridEmail">
          <Form.Label>Comment</Form.Label>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={4}
              style={{ width: "97%", resize: "none" }}
              value={comment}
              onChange={onComment}
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

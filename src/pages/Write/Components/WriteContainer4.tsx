import React, { ChangeEvent } from "react";
import { Container2 } from "../style";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface WriteContainer4Props {
  onChangeTip: (e: ChangeEvent<HTMLInputElement>) => void;
}

const WriteContainer4: React.FC<WriteContainer4Props> = ({ onChangeTip }) => {
  return (
    <Container2
      id="maincontent"
      style={{
        height: "200px",
        backgroundColor: "white",
        margin: "20px",
        padding: "20px",
      }}
    >
      <Form.Group controlId="formGridEmail">
        <Form.Label>레시피 팁</Form.Label>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            style={{ width: "95%", resize: "none" }}
            onChange={onChangeTip}
          />
        </Form.Group>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Container2>
  );
};

export default WriteContainer4;

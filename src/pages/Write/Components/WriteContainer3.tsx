import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import { Container2 } from "../style";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

interface WriteContainer3Props {
  contentArr: string[];
  onChangeContentArr: any;
  addContentArr: any;
  deleteContentArr: () => void;
  delIdxContentArr: (index: number) => void;
}

const WriteContainer3: React.FC<WriteContainer3Props> = ({
  contentArr,
  onChangeContentArr,
  addContentArr,
  deleteContentArr,
  delIdxContentArr,
}) => {
  const [hoveredIndices, setHoveredIndices] = useState<number[]>([]);
  const endOfPageRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndices((prev) => [...prev, index]);
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndices((prev) => prev.filter((i) => i !== index));
  };

  useEffect(() => {
    if (contentArr.length > 1) {
      endOfPageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [contentArr.length]);

  return (
    <>
      {contentArr.map((content, index) => (
        <Container2
          id="maincontent"
          style={{
            height: "300px",
            backgroundColor: "white",
            margin: "20px",
            padding: "20px",
            position: "relative",
          }}
          key={index}
        >
          <Button
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "black",
              opacity: hoveredIndices.includes(index) ? 1 : 0,
              transition: "opacity 0.5s",
            }}
            onClick={() => delIdxContentArr(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            X
          </Button>
          <Form.Group
            as={Col}
            controlId={`formGridIngredient${index}`}
            key={index}
          >
            <Form.Label>
              <h3>{index === 0 ? "레시피 순서" : " "}</h3>
            </Form.Label>
            <h1>STEP {index + 1}</h1>
            <div>
              <Form.Control
                as="textarea"
                rows={8}
                placeholder={`STEP ${index + 1}`}
                style={{ width: "95%", resize: "none" }}
                value={content}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  onChangeContentArr(e, index)
                }
              />
            </div>
          </Form.Group>
        </Container2>
      ))}
      <div style={{ margin: "0 20px" }}>
        <Button
          style={{ margin: "5px", backgroundColor: "black" }}
          onClick={addContentArr}
        >
          단계 추가
        </Button>
        <Button
          style={{ margin: "5px", backgroundColor: "black" }}
          onClick={deleteContentArr}
        >
          단계 삭제
        </Button>
      </div>
      <div ref={endOfPageRef}></div>
    </>
  );
};

export default WriteContainer3;

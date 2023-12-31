import React from "react";
import { Carousel } from "react-bootstrap";
import RecentCard from "./Components/RecentCard";

const SuggestRecipeList = () => {
  return (
    <>
      <h2>Suggest Recipe</h2>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RecentCard
              title={"맛있는 요리"}
              imageUrl={undefined}
              nickName={undefined}
              style={undefined}
            />
            <RecentCard
              title={"맛있는 요리"}
              imageUrl={undefined}
              nickName={undefined}
              style={undefined}
            />
            <RecentCard
              title={"맛있는 요리"}
              imageUrl={undefined}
              nickName={undefined}
              style={undefined}
            />
            <RecentCard
              title={"맛있는 요리"}
              imageUrl={undefined}
              nickName={undefined}
              style={undefined}
            />
            <RecentCard
              title={"맛있는 요리"}
              imageUrl={undefined}
              nickName={undefined}
              style={undefined}
            />
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RecentCard
              title={"맛있는 요리"}
              imageUrl={undefined}
              nickName={undefined}
              style={undefined}
            />
            <RecentCard
              title={"맛있는 요리"}
              imageUrl={undefined}
              nickName={undefined}
              style={undefined}
            />
            <RecentCard
              title={"맛있는 요리"}
              imageUrl={undefined}
              nickName={undefined}
              style={undefined}
            />
            <RecentCard
              title={"맛있는 요리"}
              imageUrl={undefined}
              nickName={undefined}
              style={undefined}
            />
            <RecentCard
              title={"맛있는 요리"}
              imageUrl={undefined}
              nickName={undefined}
              style={undefined}
            />
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RecentCard
              title={"맛있는 요리"}
              imageUrl={undefined}
              nickName={undefined}
              style={undefined}
            />
            <RecentCard
              title={"맛있는 요리"}
              imageUrl={undefined}
              nickName={undefined}
              style={undefined}
            />
            <RecentCard
              title={"맛있는 요리"}
              imageUrl={undefined}
              nickName={undefined}
              style={undefined}
            />
            <RecentCard
              title={"맛있는 요리"}
              imageUrl={undefined}
              nickName={undefined}
              style={undefined}
            />
            <RecentCard
              title={"맛있는 요리"}
              imageUrl={undefined}
              nickName={undefined}
              style={undefined}
            />
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default SuggestRecipeList;

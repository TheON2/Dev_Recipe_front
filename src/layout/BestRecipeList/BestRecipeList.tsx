import React from "react";
import { Carousel } from "react-bootstrap";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/config/configStore";

const BestRecipeList = () => {
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <>
      <h1>{user.email}`s BEST Recipe</h1>
      <Carousel>
        <Carousel.Item>
          <RecipeCard
            imageUrl={undefined}
            title={undefined}
            subtitle={undefined}
            id={undefined}
          />
          <RecipeCard
            imageUrl={undefined}
            title={undefined}
            subtitle={undefined}
            id={undefined}
          />
          <RecipeCard
            imageUrl={undefined}
            title={undefined}
            subtitle={undefined}
            id={undefined}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <RecipeCard
            imageUrl={undefined}
            title={undefined}
            subtitle={undefined}
            id={undefined}
          />
          <RecipeCard
            imageUrl={undefined}
            title={undefined}
            subtitle={undefined}
            id={undefined}
          />
          <RecipeCard
            imageUrl={undefined}
            title={undefined}
            subtitle={undefined}
            id={undefined}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <RecipeCard
            imageUrl={undefined}
            title={undefined}
            subtitle={undefined}
            id={undefined}
          />
          <RecipeCard
            imageUrl={undefined}
            title={undefined}
            subtitle={undefined}
            id={undefined}
          />
          <RecipeCard
            imageUrl={undefined}
            title={undefined}
            subtitle={undefined}
            id={undefined}
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default BestRecipeList;

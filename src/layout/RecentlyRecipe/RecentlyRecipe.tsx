import React, { useEffect, useState } from "react";
import { Container2 } from "./style";
import RecentCard from "./Components/RecentCard";
import { useQuery } from "react-query";
import { getRecipes } from "../../api/recipes";
import { Link } from "react-router-dom";

const RecentlyRecipe: React.FC = () => {
  const { data, isLoading, error } = useQuery("recipes", getRecipes);
  const [sortedRecipes, setSortedRecipes] = useState([]);

  useEffect(() => {
    if (data && !isLoading) {
      const sortedData = [...data].sort((a, b) => b.likeCount - a.likeCount);
      setSortedRecipes(sortedData.slice(0, 10));
    }
  }, [data, isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred</div>;
  return (
    <>
      <Link to="/recipeRanking">
        <h1>Recipe Ranking</h1>
      </Link>
      <Container2>
        {sortedRecipes.map((recipe, idx) => (
          <RecentCard
            key={recipe.id}
            title={recipe.title}
            subtitle={recipe.subtitle}
            id={recipe.id}
            cardNumber={idx + 1}
            imageUrl={undefined}
            nickName={undefined}
          />
        ))}
      </Container2>
    </>
  );
};

export default RecentlyRecipe;

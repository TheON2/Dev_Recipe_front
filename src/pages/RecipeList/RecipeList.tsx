import React from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { useQuery } from "react-query";
import { getRecipes } from "../../api/recipes";

const RecipeList = () => {
  // const {recipes} = useSelector((state:RootState)=>(state.recipes))
  //console.log(recipes)
  const { data, isLoading, error } = useQuery("recipes", getRecipes);
  const recipes = data || [];
  //
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred</div>;
  return (
    <>
      {recipes?.map((recipe) => (
        <RecipeCard
          id={recipe.id}
          key={recipe.title}
          title={recipe.title}
          subtitle={recipe.subtitle}
          imageUrl={undefined}
        />
      ))}
    </>
  );
};

export default RecipeList;

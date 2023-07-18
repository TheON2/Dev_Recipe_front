import React from 'react';
import {Container2} from "../../layout/RecentlyRecipe/style";
import RecentCard from "../../layout/RecentlyRecipe/Components/RecentCard";
import {useQuery} from "react-query";
import {getRecipes} from "../../api/recipes";

const RecipeRankingPage = () => {
    const { data, isLoading, error } = useQuery('recipes', getRecipes);
    const recipes = data || [];
    //
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error has occurred: {error.message}</div>;
    return (
        <>
           <h1>레시피 랭킹 페이지</h1>

                {recipes?.map((recipe) =>
                    <RecentCard key={recipe.title} title={recipe.title} subtitle={recipe.subtitle} id={recipe.id}/>
                )}
        </>
    );
};

export default RecipeRankingPage;

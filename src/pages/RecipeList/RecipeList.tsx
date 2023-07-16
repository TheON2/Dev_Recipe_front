import React from 'react';
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import {useSelector} from "react-redux";
import {RootState} from "../../type/local";
import {useQuery} from "react-query";
import {getRecipes} from "../../api/recipes";

const RecipeList = () => {
        // const {recipes} = useSelector((state:RootState)=>(state.recipes))
        //console.log(recipes)
    const { data, isLoading, error } = useQuery('recipes', getRecipes);
    const recipes = data || [];
    //
     if (isLoading) return <div>Loading...</div>;
     if (error) return <div>An error has occurred: {error.message}</div>;
    return (
        <>
            <RecipeCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
            <RecipeCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
            <RecipeCard title={"맛있는 요리"} subtitle={"맛있겠죠?"}/>
                {recipes?.map((recipe) =>
                    <RecipeCard id={recipe.id} key={recipe.title} title={recipe.title} subtitle={recipe.subtitle}/>
                )}
        </>
    );
};

export default RecipeList;

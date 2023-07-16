import React from 'react';
import {Carousel} from "react-bootstrap";
import {Container2} from "./style";
import {useSelector} from "react-redux";
import {RootState} from "../../type/local";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecentCard from "./Components/RecentCard";

const RecentlyRecipe = () => {
    const {recipes} = useSelector((state:RootState)=>(state.recipes))
    console.log(recipes)
    return (
        <Container2>
            <h2>Recently Recipe</h2>
            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={1}/>
            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={2}/>
            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={3}/>
            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={4}/>
            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={5}/>
            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={6}/>
            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={7}/>
            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={8}/>
            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={9}/>
            <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={10}/>
            {recipes?.map((recipe) =>
                <RecentCard key={recipe.title} title={recipe.title} subtitle={recipe.subtitle}/>
            )}
        </Container2>
    );
};

export default RecentlyRecipe;

import React from 'react';
import {Container2} from "../../layout/RecentlyRecipe/style";
import RecentCard from "../../layout/RecentlyRecipe/Components/RecentCard";

const RecipeRankingPage = () => {
    return (
        <>
           <h1>레시피 랭킹 페이지</h1>
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
                <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={11}/>
                <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={12}/>
                <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={13}/>
                <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={14}/>
                <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={15}/>
                <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={16}/>
                <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={17}/>
                <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={18}/>
                <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={19}/>
                <RecentCard title={"맛있는 요리"} subtitle={"맛있겠죠?"} cardNumber={20}/>
                {/*{recipes?.map((recipe) =>*/}
                {/*    <RecentCard key={recipe.title} title={recipe.title} subtitle={recipe.subtitle}/>*/}
                {/*)}*/}
            </Container2>
        </>
    );
};

export default RecipeRankingPage;

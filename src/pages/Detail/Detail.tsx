import React from 'react';
import DetailContainer1 from "./Components/DetailContainer1";
import DetailContainer2 from "./Components/DetailContainer2";
import DetailContainer3 from "./Components/DetailContainer3";
import DetailContainer4 from "./Components/DetailContainer4";
import DetailContainer5 from "./Components/DetailContainer5";
import DetailContainer6 from "./Components/DetailContainer6";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../type/local";

const Detail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const params = useParams();
    let recipe
    const {recipes} = useSelector((state:RootState)=>(state.recipes))
    if (recipes) {
        recipe = recipes.find((recipe)=>recipe.id===params.id)
    }

    return (
        <>
            <DetailContainer1 title={recipe.title} subtitle={recipe.subtitle} nickName={"testUser"}
            c1={recipe.category1} c2={recipe.category2} c3={recipe.category3} c4={recipe.category4}
            />
            <DetailContainer2 material={recipe.ingredients}/>
            {recipe.contentArr?.map((step,idx)=>
                <DetailContainer3 content={step} idx={idx}/>
            )}
            <DetailContainer4/>
            <DetailContainer5 recipeId={recipe.id}/>
            <DetailContainer6 recipeId={recipe.id}/>
        </>
    );
};

export default Detail;

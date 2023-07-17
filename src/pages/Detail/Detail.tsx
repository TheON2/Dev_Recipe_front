import React, {useState} from 'react';
import DetailContainer1 from "./Components/DetailContainer1";
import DetailContainer2 from "./Components/DetailContainer2";
import DetailContainer3 from "./Components/DetailContainer3";
import DetailContainer4 from "./Components/DetailContainer4";
import DetailContainer5 from "./Components/DetailContainer5";
import DetailContainer6 from "./Components/DetailContainer6";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../type/local";
import {useQuery} from "react-query";
import {getComments, getContents, getRecipe} from "../../api/recipes";
import {UserState} from "../../redux/reducers/userSlice";
import Update from "../Update/Update";

const Detail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const params = useParams();
    const [recipe, setRecipe] = useState(null);
    const [splitCategories, setSplitCategories] = useState([]);
    const [load, setLoad] = useState(true)
    const [update, setUpdate] = useState(false)
    const {user}: { user: UserState["user"] } = useSelector(
        (state: RootState) => state.user
    );

    const {isError, data, isSuccess,}
        = useQuery(["recipe", params.id], () => getRecipe(params.id), {
        onSuccess: (data) => {
            setRecipe(data[0]);
            setSplitCategories(data[0].category.split("^.^"));
        },
    });
    const {isError: contentError, data: contentArr, isSuccess: contentSuccess,}
        = useQuery(["content", params.id], () => getContents(params.id), {
        onSuccess: (data) => {
        },
    });
    const {isError: commentError, data: commentArr, isSuccess: commentSuccess,}
        = useQuery(["comment", params.id], () => getComments(params.id), {
        onSuccess: (data) => {
            setLoad(false);
        },
    });

    if (isError) {
        return <div>Error occurred</div>;
    }

    if (!isSuccess || load) {
        return <div>Loading...</div>;
    }

    return (isSuccess && !load &&
      <>
          {!update ? (
              <>
                  <DetailContainer1 title={recipe.title} subtitle={recipe.subtitle} nickName={user.nickName}
                                    c1={splitCategories[0]} c2={splitCategories[1]} c3={splitCategories[2]}
                                    c4={splitCategories[3]} userProfileUrl={user.imageUrl} setUpdate={setUpdate}
                                    recipeId={params.id}/>

                  <DetailContainer2 material={recipe.ingredient}/>
                  {contentArr?.map((step, idx) =>
                      <DetailContainer3 content={step.content} idx={idx}/>
                  )}
                  <DetailContainer4 nickName={user.nickName} imageUrl={user.imageUrl}
                                    profileContent={user.profileContent}/>
                  <DetailContainer5 comments={commentArr} recipeId={recipe.id}/>
                  <DetailContainer6 recipeId={recipe.id}/>
              </>
          ) : <Update user={user} content={contentArr} recipe={recipe} update={update} setUpdate={setUpdate}/>}
      </>
    );
};

export default Detail;

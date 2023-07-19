import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import BestRecipeList from "../BestRecipeList/BestRecipeList";
import ProduceUserList from "../ProduceUserList/ProduceUserList";
import RecentlyRecipe from "../RecentlyRecipe/RecentlyRecipe";
import RecipeCategory from "../RecipeCategory/RecipeCategory";
import SuggestRecipeList from "../SuggestRecipeList/SuggestRecipeList";
import {
  AUTH_USER,
  UserResponse,
  UserState,
} from "../../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../type/local";
import { UseQueryResult, useQuery } from "react-query";
import { getAuthToken } from "../../api/user";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user }: { user: UserState["user"] } = useSelector(
    (state: RootState) => state.user
  );
  const {
    data: userData,
    isSuccess: tokenSuccess,
  }: UseQueryResult<UserResponse, unknown> = useQuery("user", getAuthToken, {
    cacheTime: 0,
  });
  useEffect(() => {
    if (tokenSuccess) {
      dispatch(AUTH_USER(userData));
    } else if (user.token === undefined) {
      navigate("/Login");
    }
  }, [user.token, tokenSuccess, dispatch, navigate, userData]);
  return (
    <>
      <Banner />
      <BestRecipeList />
      {/*<ProduceUserList/>*/}
      <RecentlyRecipe />
      <SuggestRecipeList />
    </>
  );
};

export default Home;

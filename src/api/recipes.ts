import api from "../axios/api";

const addRecipe = async (newRecipe: FormData) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };

  console.log(newRecipe)
  await api.post(`/recipes`, newRecipe, config);
};

const getRecipes = async () => {
  const response = await api.get(`/recipes`);
  return response.data;
};

const getRecipe = async (recipeId) => {
  const response = await api.get(`/recipes/recipe/${recipeId}`);
  return response.data;
};

const updateRecipe = async (sendData) => {
  console.log(sendData)
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };

  await api.patch(`/recipes/${sendData.recipeId}`, sendData.formData, config);
};

const deleteRecipe = async (recipeId:string) => {
  const response = await api.delete(`/recipes/${recipeId}`);
  return response.data;
};

const getContents = async (recipeId) => {
  const response = await api.get(`/recipes/contents/${recipeId}`);
  return response.data;
};

const getComments = async (recipeId) => {
  const response = await api.get(`/recipes/comments/${recipeId}`);
  return response.data;
};

const addComment = async (sendData) => {
  const response = await api.post(`/recipes/comment`, sendData);
}

const getComment = async (recipeId) => {
  const response = await api.get(`/recipes/recipe/${recipeId}`);
  return response.data;
};

const deleteComment = async (commentId) => {
  const response = await api.delete(`/recipes/comment/${commentId}`);
  return response.data;
};

const getTodo = async (todoId:string) => {
  const response = await api.get(`/todos/todo/${todoId}`);
  return response.data;
};

const getTodosWorking = async (page:number) => {
  const response = await api.post(`/todos/working/infinite`, {page:page});
  return response.data;
};

const getTodosDone = async(page:number) => {
  const response = await api.post(`/todos/done/infinite`,{page:page});
  return response.data;
};

const getTodosWorkingPaging = async (page:number) => {
  const response = await api.post(`/todos/working/pagination`, {page:page});
  return response.data;
};

const getTodosDonePaging = async (page:number) => {
  const response = await api.post(`/todos/done/pagination`,{page:page});
  return response.data;
};

const updateDoneTodo = async (todo) => {
  const response = await api.patch(`/todos/${todo.id}/done`, {done: !(todo.done)});
  return response.data;
};

const updateTodo = async (sendData) => {
  const response = await api.patch(`/todos/${sendData.id}/content`, {content: sendData.content});
  return response.data;
};

const deleteTodo = async (todoId:string) => {
  const response = await api.delete(`/todos/${todoId}`);
  return response.data;
};


export {addRecipe,updateRecipe,deleteRecipe,getRecipes,getRecipe,getComment,getComments,deleteComment,getContents,addComment};
import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import useInput from "../../hooks/useInput";
import useArrayInput from "../../hooks/useArrayInput";
import WriteContainer1 from "./Components/WriteContainer1";
import WriteContainer2 from "./Components/WriteContainer2";
import WriteContainer3 from "./Components/WriteContainer3";
import WriteContainer4 from "./Components/WriteContainer4";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ADD_RECIPE} from "../../redux/reducers/recipeSlice";
import {v4 as uuidv4} from 'uuid'
import {useMutation, useQueryClient} from "react-query";
import {addRecipe} from "../../api/recipes";

const Write = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [title, onChangeTitle] = useInput<string | undefined>("");
    const [subtitle, onChangeSubtitle] = useInput<string | undefined>("");
    const [url, onChangeUrl] = useInput<string | undefined>("");
    const [category1, onChangeCategory1] = useInput<string | undefined>("메인반찬");
    const [category2, onChangeCategory2] = useInput<string | undefined>("일상");
    const [category3, onChangeCategory3] = useInput<string | undefined>("볶음");
    const [category4, onChangeCategory4] = useInput<string | undefined>("소고기");
    const [ingredients, onChangeIngredients, setIngredients, addIngredients, deleteIngredients, delIdxIngredients] = useArrayInput(["",], 12);
    const [contentArr, onChangeContentArr, setContentArr, addContentArr, deleteContentArr, delIdxContentArr] = useArrayInput(["",], 10);
    const [tip, onChangeTip] = useInput<string | undefined>("");
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>(null);

    const queryClient = useQueryClient();
    const {mutate: addRecipe_Mutate, isLoading: addRecipeLoading} =
        useMutation(addRecipe, {
            onSuccess: (data) => {
                queryClient.invalidateQueries("recipes");
            },
        });

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        const ingre = ingredients.join('^.^')
        const categories = [category1, category2, category3, category4];
        const joinedCategories = categories.join("^.^");

        formData.append('id', uuidv4() || '');
        formData.append('image', file || '');
        formData.append('title', title || '');
        formData.append('subtitle', subtitle || '');
        formData.append('category', joinedCategories);
        formData.append('ingredients', ingre);
        formData.append('tip', tip || '');
        formData.append('url', url || '');
        formData.append('content', JSON.stringify(contentArr));
        addRecipe_Mutate(formData)

        const newRecipe = {
            id: uuidv4(), title, subtitle, joinedCategories, contentArr, tip, url, ingre, comment: []
        }
        dispatch(ADD_RECIPE(newRecipe))
        alert("성공적으로 등록 되었습니다!")
        navigate("/")
    };

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };
    return (
        <>
            <div>
                <h2>레시피 등록</h2>
            </div>
            <Form onSubmit={onSubmit}>
                <WriteContainer1 preview={preview} onFileChange={onFileChange} onChangeCategory1={onChangeCategory1}
                                 onChangeCategory2={onChangeCategory2} onChangeCategory3={onChangeCategory3}
                                 onChangeCategory4={onChangeCategory4} onChangeSubtitle={onChangeSubtitle}
                                 onChangeTitle={onChangeTitle} onChangeUrl={onChangeUrl}/>
                <WriteContainer2 ingredients={ingredients} onChangeIngredients={onChangeIngredients}
                                 addIngredients={addIngredients} deleteIngredients={deleteIngredients}
                                 delIdxIngredients={delIdxIngredients}
                />
                <WriteContainer3 onChangeContentArr={onChangeContentArr} addContentArr={addContentArr}
                                 contentArr={contentArr} deleteContentArr={deleteContentArr}
                                 delIdxContentArr={delIdxContentArr}/>
                <WriteContainer4 onChangeTip={onChangeTip}/>
            </Form>
        </>
    );
};

export default Write;

import React from 'react';
import Profile from "./Components/Profile/Profile";
import {Container2, LayOut, Container3} from "./style";

const Mypage = () => {
    return (
        <LayOut>
            <Profile nickName={"df"}/>
            <Container2>
                <Container3>
                    <h1>으악</h1>
                </Container3>
            </Container2>
        </LayOut>
    );
};

export default Mypage;

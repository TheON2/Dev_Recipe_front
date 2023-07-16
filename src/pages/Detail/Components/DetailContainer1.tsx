import React from 'react';
import {Container2} from "../style";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import {Badge, Image} from "react-bootstrap"

const DetailContainer1 = ({imageUrl, nickName, userProfileUrl, title, subtitle,c1,c2,c3,c4}) => {
    return (
        <Container2
            id="maincontent"
            style={{
                height: "820px",
                backgroundColor: "white",
                margin: "20px",
                padding: "20px"
            }}
        >
            <div style={{display:"flex", gap:"10px", margin:"10px", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <h1><Badge bg="secondary">{c1}</Badge></h1>
                <h1><Badge bg="secondary">{c2}</Badge></h1>
                <h1><Badge bg="secondary">{c3}</Badge></h1>
                <h1><Badge bg="secondary">{c4}</Badge></h1>
            </div>
            <div style={{position: 'relative', width: '60%', height: '50%', margin: '0 auto'}}>
                <Image
                    src={imageUrl ? imageUrl : "https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"}
                    style={{width: '100%', height: '100%'}}
                    fluid
                />
                <Image
                    src={userProfileUrl ? userProfileUrl : "https://img.freepik.com/free-photo/assortment-of-vegetables-herbs-and-spices-on-black-background-top-view-copy-space_123827-21707.jpg"}
                    style={{
                        position: 'absolute',
                        bottom: '-10%',
                        left: '42%',
                        width: '15%',
                        height: '25%',
                        border: '5px solid white'
                    }}
                    roundedCircle
                />
                <br/>
                <br/>
                <br/>
                <h2>{nickName ? nickName : "CookingMaser"}</h2>
            </div>
            <div style={{marginTop: "100px"}}>
                <br/>
                <br/>
                <h1 style={{textAlign:"center"}}>{title ? title : "대강 맛나보이는 음식이름 "}</h1>
                <br/>
                <h4 style={{textAlign: "center"}}>{subtitle ? subtitle : "대강 맛있습니다 해먹으십셔"}</h4>
            </div>
        </Container2>
    );
};

export default DetailContainer1;

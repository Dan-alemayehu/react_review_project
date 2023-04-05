import React from "react";
import styled from "styled-components";
import albums from "../album-data";

const Header = () => {
    let limit = albums.length;

    if (10 > limit) {
        let moreAlbumsMessage = <HeadingA>{'You need more albums'}</HeadingA>;
        return moreAlbumsMessage
    } else {
        let moreAlbumsMessage = <HeadingB>{'Lets start playing music!'}</HeadingB>;
        return moreAlbumsMessage;
    };
}

export default Header;

let HeadingA = styled.h4`
    text-align: center;
    font-size: 20px;
`

let HeadingB = styled.h4`
    text-align: center;
    font-size: 40px;
    font-family: 'Courgette', cursive;
    border-style: inset;
    border-width: 20px;
    border-color: #ffe65a;
    text-decoration-style: wavy;
    margin-left: 30px;
    margin-right: 30px;
    background-color: #560256;
    color: #ffd700;




`
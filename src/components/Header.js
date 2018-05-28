import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    width : 100%;
    height : 60px;
    
    /* 텍스트 가운데 정렬 */
    display : flex;
    align-items : center;
    justify-content : center;

    font-size : 2rem;
    font-weight : 500;
    
    background : ${oc.blue[8]}
    color : white;
`;

const Header = () => (
    <Wrapper>
        Card Todos
    </Wrapper>
);

export default Header;
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
  width : 250px;
  padding : 0.5rem;
  background : ${oc.gray[3]};
  margin : 0.2rem;
  display : inline-block;
`;

const Title = styled.div`
  font-size : 1.2rem;
  width : 100%;
  height : 20px;
  display : flex;
  justify-content : center;
`;

const Body =  styled.div`
  width : 100%;
  height: 100%;
  background : white;
  border : 1px solid ${oc.gray[1]};
`;

const Board = ({title}) => (
    <Wrapper>
      <Title>{title}</Title>
      <Body> 내용 </Body>
    </Wrapper>
);

export default Board;
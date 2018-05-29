import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.li`
  width : 250px;
  height : calc(100% - 0.5rem);
  padding : 0.5rem;
  background : ${oc.gray[3]};
  margin : 0.2rem;
  display : inline-block;
`;

const Title = styled.div`
  font-size : 1.2rem;
  width : 100%;
  height : 5%;
  display : flex;
  justify-content : center;
  align-items : center;
`;

const Body =  styled.div`
  width : 100%;
  height: 95%;
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
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Board from "./Board";

const Wrapper = styled.div`
  width : 100%;
  
  height : calc(100% - 2rem);
`;

const BoardList = () => (
  <Wrapper>
    <Board title="할일목록" />
    <Board title="선택된할일" />
    <Board title="진행중" />
    <Board title="완료" />
    <Board title="보관" />
  </Wrapper>
);

export default BoardList;
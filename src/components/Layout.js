import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { BoardList } from "components/Board";

const Wrapper = styled.div`
  margin : 0 auto; 
  margin-top : 1.5rem;
  position : relative;
  width : 95%;
  overflow-x : auto;
  overflow-y : hidden;
`;

const Layout = () => (
    <Wrapper>
      <BoardList />
    </Wrapper>
);

export default Layout;
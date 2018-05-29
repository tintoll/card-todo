import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';


const Wrapper = styled.div`
  width: 100%;
  background: white;
  border: 1px solid ${oc.gray[2]};
  border-radius: 4px;
  box-shadow: 0 0 10px ${oc.gray[3]};
  padding: 0.4rem;
  line-height: 1rem;
  margin-bottom : 0.4rem;
`;
const Contents =  styled.div`
  white-space : normal;
`;

const Card = () => (
    <Wrapper>
      <Contents>카드의 내용을 입력합니다.sdafsdfsdfsdfsdfsdfsdfsdfsd</Contents>
    </Wrapper>
);

export default Card;
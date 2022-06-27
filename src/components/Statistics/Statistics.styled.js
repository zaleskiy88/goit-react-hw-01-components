import styled from '@emotion/styled';

export const StatsSection = styled.section`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid black;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  padding-right: 15px;
  padding-left: 15px;

  li:not(:last-child) {
    margin-right: 30px;
  }
`;

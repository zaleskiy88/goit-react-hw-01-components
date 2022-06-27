import styled from '@emotion/styled';

export const TransactionsHistoryTable = styled.table`
  margin-top: 25px;
  border: 2px solid grey;
  border-collapse: collapse;
  width: 650px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const TransactionsHistoryThead = styled.thead`
  text-align: center;

  th {
    padding: 10px;
    border: 1px solid grey;
    border-collapse: collapse;
    background-color: #92dcfa;
  }
`;

export const TransactionsHistoryTbody = styled.tbody`
  text-align: center;

  td {
    padding: 10px;
    border: 1px solid grey;
    border-collapse: collapse;
  }
`;

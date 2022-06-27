import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0px;
`;

export const ListItem = styled.li`
  margin-top: 15px;
  width: 250px;
  background-color: #92dcfa;
  border-radius: 2%;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }

  img {
    margin-right: 15px;
  }
`;

export const IsOnlineSpan = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  margin-left: 5px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

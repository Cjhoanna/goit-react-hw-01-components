import styled from 'styled-components';

export const FriendsList = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
`;

export const ListPeople = styled('li')`
  background-color: white;
  display: flex;
  width: 100%;
  padding: 10px;
  height: 80px;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
`;

export const ListStatus = styled('span')`
  width: 10px;
  height: 10px;
  border-radius: 5px;
`;

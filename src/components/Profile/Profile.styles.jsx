import styled from 'styled-components';

export const ProfileContainer = styled('div')`
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  height: 500px;
  width: 400px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  padding: 35px 0 0;
`;

export const ProfileDescription = styled('div')`
  text-align: center;
`;

export const ProfileText = styled('p')`
  font-size: 24px;
`;

export const ProfileImage = styled('img')`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  border: 1px solid black;
`;

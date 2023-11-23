import styled from 'styled-components';

export const ProfileContainer = styled('div')`
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 400px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  gap: 40px;
`;

export const ProfileDescription = styled('div')`
  text-align: center;
  padding-top: 35px;
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

export const Footer = styled('ul')`
  display: flex;
  width: 100%;
`;

export const Item = styled('li')`
  border: 1px solid #8f9ba830;
  background-color: #8f9ba830;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const Text = styled('span')`
  font-size: 20px;
`;

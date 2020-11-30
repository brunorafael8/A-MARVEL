import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('window');

const Container = styled.View`
  flex-direction: column;
  margin-bottom: 10px;
`;

const Thumb = styled.ImageBackground`
  width: ${width / 2 - 32}px;
  height: ${Math.max(0.3, Math.random()) * width}px;
  justify-content: flex-end;
`;

const Name = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  background-color: black;
`;

interface Props {
  thumbnail: string;
  name: string;
}

const CharacterCard: React.FC = (props: Props) => {
  const { thumbnail, name } = props;

  return (
    <Container>
      <Thumb source={{ uri: thumbnail }}>
        <Name>{name}</Name>
      </Thumb>
    </Container>
  );
};

export default CharacterCard;

import React from 'react';

import styled from 'styled-components/native';
import { ActivityIndicator, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: ${height - 200}px;
  width: ${width}px;
`;

const LoadingPage: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator color="#BF3934" size="large" />
    </Container>
  );
};

export default LoadingPage;

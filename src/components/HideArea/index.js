import React from 'react';
import { Image } from 'react-native';
import { Container, Code } from './styles';

export default function HideArea({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 350],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <Image
          source={{
            uri:
              'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example ',
          }}
          style={{ width: 200, height: 200 }}
        />
      </Code>
    </Container>
  );
}

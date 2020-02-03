import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import {
  Container,
  ContainerInfo,
  Avatar,
  AvatarBorder,
  InfoPersonal,
  Name,
  College,
  Cource,
  Card,
  CardPrimary,
  AvatarCollege,
  Status,
  StatusLabel,
  StatusT,
  IdLogo,
  HorizontalLine,
  CardData,
  CardRegister,
  LabelRegister,
  NumberRegister,
  Icon,
} from './styles';
import HideArea from '../../components/HideArea';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }
  return (
    <Container>
      <ContainerInfo>
        <AvatarBorder>
          <Avatar
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6rb3aFTuNRWFd5bTPRaUcB0Cf7hQpUK20DtET1bTNUz7FaUS&s',
            }}
          />
        </AvatarBorder>
        <InfoPersonal>
          <Name>Dustin Stranger</Name>
          <College>IFC/SC</College>
          <Cource>Engenharia de Software</Cource>
        </InfoPersonal>
      </ContainerInfo>
      <HideArea translateY={translateY} />
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}>
        <Card
          style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-200, 0, 600],
                  outputRange: [-50, 0, 400],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}>
          <Icon
            style={{
              transform: [
                {
                  rotate: translateY.interpolate({
                    inputRange: [0, 600],
                    outputRange: [0, 5],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <MaterialIcons
              name="keyboard-arrow-down"
              color="#3bb0b7"
              size={40}
            />
          </Icon>

          <CardPrimary>
            <AvatarCollege
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm89er3aLFndv9DqlufsnZNzjEEw4K4vprRpWx3LFvo0Eu-mtu&s',
              }}
            />
            <Status>
              <StatusLabel>Situação</StatusLabel>
              <StatusT>Ativo</StatusT>
            </Status>
          </CardPrimary>
          <IdLogo source={{ uri: 'https://i.imgur.com/FiZVtdb.png' }} />
          <HorizontalLine />
          <CardData>
            <CardRegister>
              <LabelRegister>Registro</LabelRegister>
              <NumberRegister>777-9999-10</NumberRegister>
            </CardRegister>
            <CardRegister>
              <LabelRegister>Validade</LabelRegister>
              <NumberRegister>11/12/2020</NumberRegister>
            </CardRegister>
          </CardData>
        </Card>
      </PanGestureHandler>
    </Container>
  );
}

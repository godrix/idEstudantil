import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  background: #3bb0b7;
  flex: 1;
  align-items: center;
`;

export const ContainerInfo = styled.SafeAreaView`
  margin-top: 80px;
  margin-bottom: 25px;
  flex-direction: row;
`;
export const AvatarBorder = styled.View`
  border: solid 5px #fff;
  border-radius: 5px;
`;
export const Avatar = styled.Image`
  width: 120px;
  height: 160px;
`;
export const InfoPersonal = styled.View`
  margin-left: 10px;
  margin-top: 20px;
`;
export const Name = styled.Text`
  font-size: 18px;
  color: #fff;
`;
export const College = styled.Text`
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 21px;
  color: rgba(255, 255, 255, 0.6);
`;
export const Cource = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;

export const Card = styled(Animated.View)`
  background: #fff;
  width: 95%;
  height: 100%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  position: absolute;
  top: 300px;
`;

export const Icon = styled(Animated.View)`
  position: absolute;
  left: 45%;
`;

export const CardPrimary = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 60px;
  margin-bottom: 50px;
`;
export const AvatarCollege = styled.Image`
  width: 80px;
  height: 80px;
`;
export const Status = styled.View`
  align-items: center;
`;
export const StatusLabel = styled.Text`
  color: #3bb0b7;
  font-size: 18px;
`;
export const StatusT = styled.Text`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  color: #7f8c8d;
`;

export const IdLogo = styled.Image`
  width: 80%;
  height: 150px;
  margin: 0 auto;
`;

export const HorizontalLine = styled.View`
  background: #3bb0b7;
  width: 80%;
  height: 2px;
  margin: 25px auto;
`;

export const CardData = styled.View`
  margin-left: 10%;
`;
export const CardRegister = styled.View``;
export const LabelRegister = styled.Text`
  color: #3bb0b7;
  font-size: 21px;
`;
export const NumberRegister = styled.Text`
  color: #7f8c8d;
  font-size: 28px;
`;

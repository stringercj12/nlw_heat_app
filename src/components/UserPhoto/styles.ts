import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../theme';

type AvatarProps = {
  avatarSize: number;
}

type BorderGradientProps = {
  containerSize: number;
}

export const BorderGradient = styled(LinearGradient) <BorderGradientProps>`
  width: ${(props) => props.containerSize}px;
  height: ${(props) => props.containerSize}px;
  border-radius: ${(props) => props.containerSize / 2}px;

  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image<AvatarProps>`
  width: ${(props) => props.avatarSize}px;
  height: ${(props) => props.avatarSize}px;
  border-radius: ${(props) => props.avatarSize / 2}px;
  border-width: 4px;
  border-color: ${COLORS.BLACK_SECONDARY};
`;

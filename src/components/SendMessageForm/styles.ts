import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { COLORS } from '../../theme';

export const Container = styled.View`
  width: 100%;
  height: 184px;
  background-color: ${COLORS.BLACK_TERTIARY};
  padding-bottom: ${getBottomSpace() + 16}px;
  padding-top: 16px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 88px;
  
  color: ${COLORS.WHITE};
`;
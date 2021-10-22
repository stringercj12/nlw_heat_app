import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../theme';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

export const LogoutButton = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logout = styled.TouchableOpacity`

`;

export const LogoutText = styled.Text`
  font-size: 15px;
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.WHITE};
  margin-right: 20px;
`;

export const Avatar = styled.View`

`;

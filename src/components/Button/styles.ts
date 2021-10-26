import styled from 'styled-components/native';
import { FONTS } from '../../theme';

interface ContainerProps {
  backgroundColor: string;
}

interface TitleProps {
  color: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    width: 100%; 
    height: 48px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Title = styled.Text<TitleProps>`
  font-size: 14px;
  font-family: ${FONTS.BOLD};
  margin-left: 12px;
  color: ${({ color }) => color};
`;
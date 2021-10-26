import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  Title
} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  color: string;
  backgroundColor: string;
  icon?: React.ComponentProps<typeof AntDesign>['name'];
  isLoading?: boolean;
}

export function Button({ title, color, backgroundColor, icon, isLoading = false, ...rest }: Props) {
  return (
    <Container
      {...rest}
      activeOpacity={0.7}
      disabled={isLoading}
      backgroundColor={backgroundColor}
    >
      {isLoading ? <ActivityIndicator color={color} /> :
        <>
          <AntDesign
            name={icon}
            size={24}
          />
          <Title color={color}>
            {title}
          </Title>
        </>
      }
    </Container>
  );
}
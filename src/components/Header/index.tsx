import React from 'react';

import {
  Container,
  LogoutButton,
  Logout,
  LogoutText,
  Avatar
} from './styles';

import LogoSvg from '../../assets/logo.svg';
import { UserPhoto } from '../UserPhoto';

export function Header() {
  return (
    <Container>
      <LogoSvg />
      <LogoutButton>
        <Logout>
          <LogoutText>Sair</LogoutText>
        </Logout>
        <Avatar>
          <UserPhoto imageUri="https://github.com/stringercj12.png" />
        </Avatar>
      </LogoutButton>
    </Container>
  );
}
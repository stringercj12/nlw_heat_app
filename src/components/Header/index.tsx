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
import { useAuth } from '../../hooks/auth';

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <LogoSvg />
      <LogoutButton>
        {user &&
          <Logout onPress={signOut}>
            <LogoutText>Sair</LogoutText>
          </Logout>
        }
        <Avatar>
          <UserPhoto imageUri={user?.avatar_url} />
        </Avatar>
      </LogoutButton>
    </Container>
  );
}
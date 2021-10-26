import React from 'react';
import { Button } from '../Button';
import { COLORS } from '../../theme';

import {
  Container
} from './styles';
import { useAuth } from '../../hooks/auth';

export function SignInBox() {
  const { signIn, isSignIn } = useAuth();

  return (
    <Container>
      <Button
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSignIn}
      />
    </Container>
  );
}
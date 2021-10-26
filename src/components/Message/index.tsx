import React from 'react';
import { MotiView } from 'moti';
import { UserPhoto } from '../UserPhoto';

import {
  Footer,
  MessageText,
  UserName
} from './styles';

export type MessageProps = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

type Props = {
  data: MessageProps
}

export function Message({ data }: Props) {

  return (
    <MotiView
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 700 }}
      style={{
        width: '100%',
        marginBottom: 36
      }}
    >
      <MessageText>
        {data?.text}
      </MessageText>

      <Footer>
        <UserPhoto
          imageUri={data?.user.avatar_url}
          sizes="SMALL"
        />
        <UserName>
          {data?.user?.name}
        </UserName>
      </Footer>

    </MotiView>
  );
}
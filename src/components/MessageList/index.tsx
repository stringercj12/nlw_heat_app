import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Header } from '../Header';
import { Message, MessageProps } from '../Message';
import { io } from 'socket.io-client';

import { MESSAGES_EXAMPLE } from '../../utils/messages';

import {
  Container
} from './styles';

let messagesQueue: MessageProps[] = MESSAGES_EXAMPLE;


const socket = io(String(api.defaults.baseURL));
socket.on('new_message', (newMessage) => {
  messagesQueue.push(newMessage);
});

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const messagesResponse = await api.get<MessageProps[]>('messages/last3');
      setCurrentMessages(messagesResponse.data);
    }

    fetchMessages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setCurrentMessages(prevState => [
          messagesQueue[0],
          prevState[0],
          prevState[1]
        ]);

        messagesQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [])

  return (
    <Container
      keyboardShouldPersistTaps="never"
      contentContainerStyle={{
        paddingTop: 135,
        paddingBottom: 184
      }}
    >
      {currentMessages.map((message) => <Message key={message.id} data={message} />)}
      <Message data={currentMessages[0]} />

    </Container>
  );
}


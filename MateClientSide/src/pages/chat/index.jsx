import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View } from 'react-native'; 

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello!',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Demo User',
      },
    },
    {
      _id: 2,
      text: 'How are you?',
      createdAt: new Date(Date.UTC(2023, 4, 21, 17, 20, 0)),
      user: {
        _id: 1,
        name: 'Current User',
      },
    },
    {
      _id: 3,
      text: 'I am doing well, thanks!',
      createdAt: new Date(Date.UTC(2023, 4, 21, 17, 25, 0)),
      user: {
        _id: 2,
        name: 'Demo User',
      },
    },
  ]);

  useEffect(() => {
    // Fetch initial messages or perform any necessary setup
    // Make sure to include the appropriate dependencies in the dependency array
    // to avoid triggering the effect on every render
  }, []);

  const onSend = (newMessages = []) => {
    setMessages(prevMessages => GiftedChat.append(prevMessages, newMessages));
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: 1,
        name: 'Current User',
      }}
    />
  );
};

export default Chat;
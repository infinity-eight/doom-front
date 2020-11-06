// @refresh reset
import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import AsyncStorage from '@react-native-community/async-storage';
import { LogBox } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const TextInput = styled.TextInput`
  height: 50px;
  width: 100%;
  border-width: 1px;
  padding: 15px;
  margin-bottom: 20px;
  border-color: gray;
`;

const Button = styled.Button``;

const firebaseConfig = {...};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

LogBox.ignoreLogs(['Setting a timer for a long period of time']);
//firebase.firestore().settings({ experimentalForceLongPolling: true });
const db = firebase.firestore();
const chatsRef = db.collection('chats');

export default function () {
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState('');
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    readUser();
    const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === 'added')
        .map(({ doc }) => {
          const message = doc.data();
          //createdAt is firebase.firestore.Timestamp instance
          //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
          return { ...message, createdAt: message.createdAt.toDate() };
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      appendMessages(messagesFirestore);
    });
    return () => unsubscribe();
  }, []);

  const appendMessages = useCallback(
    (messages) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages),
      );
    },
    [messages],
  );

  async function readUser() {
    const user = await AsyncStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }
  async function handlePress() {
    const _id = Math.random().toString(36).substring(7);
    const user = { _id, name };
    await AsyncStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  }
  async function handleSend(messages: any[]) {
    const writes = messages.map((m) => chatsRef.add(m));
    await Promise.all(writes);
  }

  if (!user) {
    return (
      <Container>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <Button onPress={handlePress} title="Enter the chat" />
      </Container>
    );
  }
  return <GiftedChat messages={messages} user={user} onSend={handleSend} />;
}

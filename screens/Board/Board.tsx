import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Input from '../../components/Search/Input';
import List from '../../components/List';
import * as firebase from 'firebase';
import 'firebase/firestore';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const MainWarp = styled.View`
  background-color: white;
  flex: 1;
  padding: 60px 5px 0 5px;
`;

const TouchableOpacity = styled.TouchableOpacity`
  background-color: white;
  position: absolute;
  width: 120px;
  padding: 10px;
  top: 70px;
  right: 10px;
  z-index: 10;
  border-radius: 20px;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.3);
`;

const RegisterBtn = styled.Text`
  text-align: center;
`;

const EmtList = styled.View`
  width: ${WIDTH / 3.5}px;
  margin: 0 auto 0 auto;
`;

const ListWarp = styled.View``;

const FlatList = styled.FlatList`
  height: 100%;
  padding-top: 40px;
`;

interface Props {
  navigation: any;
}

const formatData = (data: any, numColumns: any) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 3;

export default function Board({ navigation }: any) {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firebase
      .firestore()
      .collection('posts')
      .onSnapshot((querySnapshot) => {
        const users: any = [];

        querySnapshot.forEach((documentSnapshot) => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(users);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  const renderPost = (post: any) => {
    if (post.empty === true) {
      return <EmtList />;
    }
    return <List {...post} />;
  };

  return (
    <>
      <Input />
      <MainWarp>
        <TouchableOpacity onPress={() => navigation.navigate('작성')}>
          <RegisterBtn>도옴이 필요해요</RegisterBtn>
        </TouchableOpacity>
        <ListWarp>
          <FlatList
            data={formatData(users, numColumns)}
            renderItem={({ item }: any) => renderPost(item)}
            keyExtractor={(item: any) => item.name}
            numColumns={numColumns}
          />
        </ListWarp>
      </MainWarp>
    </>
  );
}

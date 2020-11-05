import * as React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';

const MainWarp = styled.View`
  flex: 1;
`;

const ProfileView = styled.View`
  height: 110px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-width: 1px;
  box-shadow: rgb(230, 230, 230) 0px 0px 0px;
`;

const BtnView = styled.View`
  height: 130px;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-width: 1px;
  box-shadow: rgb(230, 230, 230) 0px 0px 0px;
`;

const ImageWarp = styled.View`
  height: 100%;
  justify-content: center;
`;

const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  border-color: #fff;
  border-width: 1px;
`;

const BtnWarp = styled.View`
  height: 100%;
  justify-content: center;
`;

const Btn = styled.TouchableOpacity``;

const BtnImage = styled.Image`
  width: 50px;
  height: 50px;
  overflow: visible;
`;

const BtnText = styled.Text`
  margin-top: 10px;
  text-align: center;
  font-weight: 300;
  font-size: 15px;
`;

const SettingView = styled.View`
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-width: 1px;
  box-shadow: rgb(230, 230, 230) 0px 0px 0px;
`;

const SettingBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SettingIcons = styled(Ionicons)`
  height: 100%;
`;

const SettingText = styled.Text`
  height: 100%;
  margin-left: 20px;
  font-weight: 900;
  font-size: 15px;
`;

let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
export default class Profile extends React.Component {
  signOutUser = () => {
    firebase.auth().signOut();
  };
  render() {
    return (
      <MainWarp>
        <ProfileView>
          <ImageWarp>
            <Image source={require('../../images/defaultProfile.jpg')} />
          </ImageWarp>
        </ProfileView>
        <BtnView>
          <BtnWarp>
            <Btn>
              <BtnImage source={require('../../images/icons/15_1.png')} />
              <BtnText>헌혈내역</BtnText>
            </Btn>
          </BtnWarp>
          <BtnWarp>
            <Btn>
              <BtnImage source={require('../../images/icons/16_1.png')} />
              <BtnText>기부내역</BtnText>
            </Btn>
          </BtnWarp>
          <BtnWarp>
            <Btn>
              <BtnImage source={require('../../images/icons/17_1.png')} />
              <BtnText>헌혈증서</BtnText>
            </Btn>
          </BtnWarp>
        </BtnView>
        <SettingView>
          <SettingBtn onPress={this.signOutUser}>
            <SettingIcons name={`${iconName}log-out`} size={26} />
            <SettingText>로그아웃</SettingText>
          </SettingBtn>
        </SettingView>
      </MainWarp>
    );
  }
}

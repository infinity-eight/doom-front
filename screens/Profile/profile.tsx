import * as React from 'react';
import { AsyncStorage, Platform } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const MainWarp = styled.View`
  flex: 1;
`;

const ProfileView = styled.View`
  height: 110px;
  flex-direction: row;
  flex-wrap: wrap;
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

const NameWarp = styled.View`
  height: 100%;
  justify-content: center;
`;

const Image = styled.Image`
  width: 70px;
  height: 70px;
  margin-left: 10px;
  border-radius: 50px;
  border-color: #fff;
  border-width: 1px;
`;

const Name = styled.Text`
  margin-left: 10px;
  font-weight: 900;
  font-size: 17px;
`;

const BtnWarp = styled.View`
  height: 100%;
  justify-content: center;
`;

const Btn = styled.TouchableOpacity``;

const BtnImage = styled.Image`
  width: 60px;
  height: 60px;
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

export default function () {
  let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
  return (
    <MainWarp>
      <ProfileView>
        <ImageWarp>
          <Image source={require('../../images/defaultProfile.jpg')} />
        </ImageWarp>
        <NameWarp>
          <Name>이름</Name>
        </NameWarp>
      </ProfileView>
      <BtnView>
        <BtnWarp>
          <Btn>
            <BtnImage source={require('../../images/defaultProfile.jpg')} />
            <BtnText>헌혈내역</BtnText>
          </Btn>
        </BtnWarp>
        <BtnWarp>
          <Btn>
            <BtnImage source={require('../../images/defaultProfile.jpg')} />
            <BtnText>기부내역</BtnText>
          </Btn>
        </BtnWarp>
        <BtnWarp>
          <Btn>
            <BtnImage source={require('../../images/defaultProfile.jpg')} />
            <BtnText>헌혈증서</BtnText>
          </Btn>
        </BtnWarp>
      </BtnView>
      <SettingView>
        <SettingBtn>
          <SettingIcons name={`${iconName}log-out`} size={26} />
          <SettingText>로그아웃</SettingText>
        </SettingBtn>
      </SettingView>
    </MainWarp>
  );
}

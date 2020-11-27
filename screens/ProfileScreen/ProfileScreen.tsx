import * as React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Fire from '../../Fire';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const MainWarp = styled.View`
  flex: 1;
`;

const ProfileWrapWrap = styled.View`
  width: ${WIDTH}px;
  height: ${WIDTH / 1.4}px;
  align-self: center;
  overflow: hidden;
`;

const ProfileWrap = styled.View`
  width: ${WIDTH * 2}px;
  height: ${WIDTH * 2}px;
  margin-left: -${WIDTH / 2}px;
  border-radius: ${WIDTH}px;
  position: absolute;
  bottom: 0;
  overflow: hidden;
`;

const ProfileView = styled.View`
  width: ${WIDTH}px;
  height: ${WIDTH / 1.4}px;
  margin-left: ${WIDTH / 2}px;
  position: absolute;
  align-items: center;
  background-color: white;
  bottom: 0;
`;

const ImageWrap = styled.View`
  width: 110px;
  height: 110px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

const WrapImage = styled.Image`
  width: 120px;
  height: 120px;
  position: absolute;
  overflow: visible;
`;

const Image = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 100px;
  border-color: #fff;
  border-width: 1px;
`;

const FigureView = styled.View`
  margin-top: 30px;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;

const FigureWrap = styled.View`
  width: 100px;
  align-items: center;
  text-align: center;
`;

const Figure = styled.Text`
  font-size: 30px;
`;

const FigureText = styled.Text`
  margin-top: 10px;
  font-weight: 300;
  font-size: 15px;
  color: #707070;
`;

const BtnView = styled.View`
  margin-top: 50px;
  justify-content: space-around;
  flex-direction: row;
`;

const BtnWrap = styled.View`
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

export default class ProfileScreen extends React.Component {
  state = {
    user: {},
  };

  unsubscribe = null;

  componentDidMount() {
    const user = this.props.uid || Fire.shared.uid;

    this.unsubscribe = Fire.shared.firestore
      .collection('users')
      .doc(user)
      .onSnapshot((doc) => {
        this.setState({ user: doc.data() });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <MainWarp>
        <ProfileWrapWrap>
          <ProfileWrap>
            <ProfileView>
              <ImageWrap>
                <WrapImage source={require('../../images/profile_wrap.png')} />
                <Image
                  source={
                    this.state.user.avatar
                      ? { uri: this.state.user.avatar }
                      : require('../../images/default_profile.jpg')
                  }
                />
              </ImageWrap>
              <FigureView>
                <FigureWrap>
                  <Figure>0</Figure>
                  <FigureText>헌혈</FigureText>
                </FigureWrap>
                <FigureWrap>
                  <Figure>26.5°</Figure>
                  <FigureText>신뢰도</FigureText>
                </FigureWrap>
                <FigureWrap>
                  <Figure>0</Figure>
                  <FigureText>지정헌혈</FigureText>
                </FigureWrap>
              </FigureView>
            </ProfileView>
          </ProfileWrap>
        </ProfileWrapWrap>
        <BtnView>
          <BtnWrap>
            <Btn>
              <BtnImage source={require('../../images/icons/15_1.png')} />
              <BtnText>헌혈내역</BtnText>
            </Btn>
          </BtnWrap>
          <BtnWrap>
            <Btn>
              <BtnImage source={require('../../images/icons/16_1.png')} />
              <BtnText>기부내역</BtnText>
            </Btn>
          </BtnWrap>
          <BtnWrap>
            <Btn>
              <BtnImage source={require('../../images/icons/17_1.png')} />
              <BtnText>헌혈증서</BtnText>
            </Btn>
          </BtnWrap>
        </BtnView>
      </MainWarp>
    );
  }
}

import React from 'react';
import { Dimensions } from 'react-native';
import { Chevron } from 'react-native-shapes';
import RNPickerSelect from 'react-native-picker-select';
import styled from 'styled-components/native';
import firebase from 'firebase';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const pickerStyle = {
  inputIOS: {
    width: 100,
    height: 40,
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'white',
    borderBottomColor: '#f33328',
    marginBottom: 20,
    color: 'black',
  },
  inputAndroid: {
    width: 100,
    height: 40,
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'white',
    borderBottomColor: '#f33328',
    marginBottom: 20,
    color: 'black',
  },
  placeholderColor: 'white',
  underline: { borderTopWidth: 0 },
  iconContainer: {
    top: 15,
    right: 15,
  },
};

const MainWarp = styled.View`
  background-color: white;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ErrorView = styled.View`
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const ErrorText = styled.Text`
  color: #e9446a;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
`;

const Image = styled.Image`
  position: absolute;
  top: ${HEIGHT / 7}px;
  background-color: white;
  width: 150px;
  height: 150px;
`;

const NameBloodWrap = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const InputWrap = styled.View`
  width: 300px;
`;

const NameInput = styled.TextInput`
  width: 200px;
  height: 40px;
  border: solid 2px white;
  border-bottom-color: #f33328;
  margin-bottom: 20px;
  font-size: 20px;
`;

const TextInput = styled.TextInput`
  width: 300px;
  height: 40px;
  border: solid 2px white;
  border-bottom-color: #f33328;
  margin-bottom: 20px;
  font-size: 20px;
`;

const BtnWarp = styled.View`
  position: absolute;
  bottom: 30px;
`;

const RegisterBtn = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  margin-top: 80px;
  border-radius: 50px;
  background-color: #f33328;
  justify-content: center;
  align-items: center;
`;

const RegisterBtnText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const LoginBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  border-radius: 50px;
`;

const LoginBtnText = styled.Text`
  color: #0000008d;
  font-size: 15px;
`;

export interface FormData {
  name: string;
  id: string;
  password: string;
  repassword: string;
}

interface Props {
  navigation: any;
}

export default class RegisterScreen extends React.Component<Props> {
  state = {
    name: '',
    bloodType: '',
    email: '',
    password: '',
    repassword: '',
    errorMessage: null,
  };

  /* handleSubmit = () => {
    if(this.state.password === this.state.repassword){
      this.handleSignUp
    } else {
      this.setState({errorMessage: 'They have different passwords.'})
    }
  } */

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredentials) => {
        return userCredentials.user?.updateProfile({
          displayName: this.state.name,
        });
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <MainWarp>
        <Image source={require('./../../../assets/icon.png')} />
        <ErrorView>
          {this.state.errorMessage && (
            <ErrorText>{this.state.errorMessage}</ErrorText>
          )}
        </ErrorView>
        <InputWrap>
          <NameBloodWrap>
            <NameInput
              placeholder="이름"
              autoCapitalize="none"
              textContentType="name"
              value={this.state.name}
              onChangeText={(name: any) => this.setState({ name })}
            />
            <RNPickerSelect
              onValueChange={(bloodType) => this.setState({ bloodType })}
              placeholder={{
                label: '혈액형',
                value: null,
                color: '#f33328',
              }}
              style={pickerStyle}
              Icon={() => {
                return <Chevron size={1.5} color="gray" />;
              }}
              items={[
                { label: 'A+', value: 'A+' },
                { label: 'A-', value: 'A-' },
                { label: 'B+', value: 'B+' },
                { label: 'B-', value: 'B-' },
                { label: 'AB+', value: 'AB+' },
                { label: 'AB-', value: 'AB-' },
                { label: 'O-', value: 'O-' },
                { label: 'O-', value: 'O-' },
              ]}
            />
          </NameBloodWrap>
          <TextInput
            placeholder="이메일"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            value={this.state.email}
            onChangeText={(email: any) => this.setState({ email })}
          />
          <TextInput
            placeholder="비밀번호"
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password: any) => this.setState({ password })}
          />
          {/* <TextInput 
        placeholder="비밀번호 확인"
        textContentType="password"
        autoCapitalize="none"
        secureTextEntry={true}
        value={this.state.repassword}
        onChange={(repassword: any) => this.setState({ repassword })} /> */}
        </InputWrap>
        <BtnWarp>
          <RegisterBtn onPress={this.handleSignUp}>
            <RegisterBtnText>회원가입</RegisterBtnText>
          </RegisterBtn>
          <LoginBtn onPress={() => this.props.navigation.navigate('Login')}>
            <LoginBtnText>로그인</LoginBtnText>
          </LoginBtn>
        </BtnWarp>
      </MainWarp>
    );
  }
}

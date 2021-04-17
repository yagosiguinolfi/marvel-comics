import React from "react";
import { Container, View, Image, Text, Input, Button, Link } from "../../utils/styles";
import { colors } from '../../utils/colors';
import { useHistory } from "react-router-dom";


import bkgLogin from '../../assets/images/background-login-black.png';
import imgComicsLogo from '../../assets/images/marvel-comics-logo.png';

function Login() {
  let history = useHistory();

  function goToRegister() {
    history.push('/register');
  }

  function authLogin() {
    // if(isAutenticated({user: 'yago', pass: '123'}))
    history.push('/');
  }

  return (
    <Container backgroundImage={bkgLogin}>
      <View
        width={'650px'}
        height={'400px'}
        radius={20}
        column
        color={colors.white} >
        <Image src={imgComicsLogo} width={200} />
        <View>
          <View align={'flex-start'} margin={'15px 0'}>
            <Text bold>Email</Text>
            <Input />
            <Text bold>Senha</Text>
            <Input />
            <Link size={13} to={`/app`} >Esqueceu sua senha?</Link>
          </View>
          <View row>
            <Button light borderWidth={2} borderColor={colors.red} onClick={goToRegister}><Text color={colors.red} bold>Cadastre-se</Text></Button>
            <Button light borderWidth={2} borderColor={colors.red} onClick={() => authLogin()}><Text color={colors.red} bold>Login</Text></Button>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Login;

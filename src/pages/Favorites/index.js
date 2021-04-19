import React from "react";
import { Container, View, Image, Text, Input, Button, Link } from "../../utils/styles";
import { colors } from '../../utils/colors';
import { useHistory } from "react-router-dom";


import bkgApp from '../../assets/images/background-login-black.png';
import imgComicsLogo from '../../assets/images/marvel-comics-logo.png';
import { useRouteMatch } from "react-router";

function Login () {
  let match = useRouteMatch();
  let history = useHistory();

  function isAutenticated(params) {
    return true;
    
  }
  function authLogin(){
    // if(isAutenticated({user: 'yago', pass: '123'}))
    history.push('/app');
  }

  return (
    <Container backgroundImage={bkgApp}>
      <View
        width={'750px'}
        height={'500px'}
        radius={'20px'}
        column
        color={colors.white} >
        <Image src={imgComicsLogo} width={'200px'} />
        <View>
        <View align={'flex-start'}>
          <Text>Usuário</Text>
          <Input />
          <Text>Senha</Text>
          <Input />
          <Link size={'13px'} to={`/app`} >Esqueceu sua senha?</Link>
          </View>
          <View row>
            <Button light borderWidth={2} borderColor={colors.red}><Text color={colors.red} bold>Cadastre-se</Text></Button>
            <Button light borderWidth={2} borderColor={colors.red} onClick={() => authLogin()}><Text color={colors.red} bold>Login</Text></Button>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Login;

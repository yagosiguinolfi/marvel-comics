import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Text, Input, Button } from "../../utils/styles";
import { View, Image } from "./styles";
import { colors } from "../../utils/colors";

import bkgRegister from "../../assets/images/background-login-black.png";
import imgComicsLogo from "../../assets/images/marvel-comics-logo.png";

const initialState = {
  name: '',
  cpf: '',
  birthDate: '',
  email: '',
  password: '',
  passwordConfirm: '',
  profileImg: '',
};

function Register() {
  let history = useHistory();

  const [state, setState] = useState(initialState);

  function doRegister() {
    // if(isAutenticated({user: 'yago', pass: '123'}))
    // history.push('/app');
  }

  function goToLogin() {
    history.push("/login");
  }

  function handleInputChange(event) {
    const { id, value } = event.target;
    setState({ ...state, [id]: value });
  }

  return (
    <Container backgroundImage={bkgRegister}>
      <View width={'650px'} height={'400px'} radius={20} column color={colors.white}>
        <Image src={imgComicsLogo} width={100} />
        <View>
          <Text size={32} dark bold>
            Criar conta
          </Text>
          <View align={"flex-start"} width={'300px'}>
            <View align={"flex-start"} width={'100%'}>
              <Text marginV>Nome e sobrenome</Text>
              <Input
                id="name"
                placeholder="Insira seu nome"
                value={state.name}
                onChange={handleInputChange}
              />
            </View>
            <View row justify={"space-between"} width={'100%'}>
              <View align={"flex-start"} marginL>
                <Text>Cpf</Text>
                <Input 
                id="cpf" 
                placeholder="Insira seu cpf" 
                value={state.cpf}
                onChange={handleInputChange}
                />
              </View>
              <View align={"flex-start"}>
                <Text>Data de nascimento</Text>
                <Input 
                id="birthDate"                
                placeholder="Insira sua data de nascimento" 
                value={state.birthDate}
                onChange={handleInputChange}
                />
              </View>
            </View>
            <View align={"flex-start"} width={'100%'}>
              <Text>Email</Text>
              <Input 
                id="email"
              placeholder="Insira seu email" 
              value={state.email}
              onChange={handleInputChange}
              />
            </View>
            <View row justify={"space-between"} width={'100%'}>
              <View align={"flex-start"} marginL>
                <Text>Senha</Text>
                <Input 
                id="password"
                password 
                placeholder="Insira sua senha" 
                value={state.password}
                onChange={handleInputChange}
                />
              </View>
              <View align={"flex-start"}>
                <Text>Confirmar senha</Text>
                <Input 
                id="passwordConfirm"
                password 
                placeholder="Confirme sua senha" 
                value={state.passwordConfirm}
                onChange={handleInputChange}
                />
              </View>
            </View>
          </View>
          <View row margin={"20px 0 0 0"}>
            <Button
              light
              borderWidth={2}
              borderColor={colors.red}
              onClick={goToLogin}
            >
              <Text color={colors.red} bold>
                Fazer login
              </Text>
            </Button>
            <Button
              light
              borderWidth={2}
              borderColor={colors.red}
              onClick={() => console.log(state)}
            >
              <Text color={colors.red} bold>
                Cadastrar
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </Container>
  );
}

export default Register;

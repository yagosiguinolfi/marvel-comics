import React, { useState } from "react";
// import { useRoutes } from "react-router-dom";
import { Container, Text, Input, Button } from "../../utils/styles";
import { View, Image } from "./styles";
import { colors } from "../../utils/colors";
import { useNavigate } from "react-router-dom";

import bkgApp from "../../assets/images/background-login-black.png";
import imgComicsLogo from "../../assets/images/marvel-comics-logo.png";
import axios from "axios";

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
  // let routes = useRoutes();

  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

//"1996-05-03 00:00:00" 
  function doRegister() {
    axios.post(
      'http://localhost:8080/users', { 
        name: state.name, 
        email: state.email, 
        password: state.password, 
        cpf: state.cpf,    
        birth_date: state.birthDate + ' 00:00:00',   
        profile_img: state.profileImg }, {})
      .then(async function (response) {
        await localStorage.setItem( 'token', response.data.token)
        console.log(response.data.token)
      })
      .catch(function (error) {
        console.log('Erro:', error)
      });
      

    const headers = { authorization: 'Bearer ' + localStorage.getItem('token')  };

    axios.get('http://localhost:8080/projects', { headers })
      .then(function (response) {
        if (response.data.ok) navigate('/');
      });
  }

  function goToLogin() {
    navigate("/login");
  }

  function handleInputChange(event) {
    const { id, value } = event.target;
    setState({ ...state, [id]: value });
  }

  return (
    <Container backgroundImage={bkgApp}>
      <View
        width={"65%"}
        minHeight={"100%"}
        radius={20}
        column
        color={colors.white}
      >
        <Image src={imgComicsLogo} width={100} />
        <View padding={'60px 0'} >
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
                  placeholder="DD-MM-AAAA"
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
              onClick={() => doRegister()}
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

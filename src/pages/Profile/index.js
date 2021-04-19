import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Text, Input, Button } from "../../utils/styles";
import { View, Image } from "./styles";
import { colors } from "../../utils/colors";
import { useNavigate } from "react-router-dom";

import bkgApp from "../../assets/images/background-login-black.png";
import imgComicsLogo from "../../assets/images/marvel-comics-logo.png";

const initialState = {
  data: {
    id: '',
    name: '',
    cpf: '',
    birthDate: '',
    email: '',
    password: '',
    passwordConfirm: '',
    profileImg: '',
  }
};

function Profile() {
  // let routes = useRoutes();

  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/user/`, { body: { id: localStorage.getItem('user_id')}})
      .then(async function (response) {
        console.log(response.data)
        await setState({ ...state, ...response.data.user })
      })
      .catch(function (error) {
        console.log('Erro:', error)
      });
  }, []);


  //"1996-05-03 00:00:00" 
  function saveProfile() {
    if(verifyPass())
    axios.put(
      'http://localhost:8080/users', {
      id: localStorage.getItem('user_id'),
      name: state.name,
      email: state.email,
      password: state.password,
      cpf: state.cpf,
      birth_date: state.birthDate + ' 00:00:00',
      profile_img: state.profileImg
    }, {}).then(async function (response) {
      await localStorage.setItem('token', response.data.token)
      console.log(response.data.token)
    })
      .catch(function (error) {
        console.log('Erro:', error)
      });


    const headers = { authorization: 'Bearer ' + localStorage.getItem('token') };

    axios.get('http://localhost:8080/projects', { headers })
      .then(function (response) {
        if (response.data.ok) navigate('/');
      });
  }

  function verifyPass() {
    return state.password == state.passwordConfirm;
  }

  function goToHome() {
    navigate("/");
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
        {console.log(state)}
        <View padding={'60px 0'} >
          <Text size={32} dark bold>
            Perfil
          </Text>
          <View align={"flex-start"} width={'300px'}>
            <View align={"flex-start"} width={'100%'}>
              <Text marginV>Nome e sobrenome</Text>
              <Input
                id="name"
                value={state.name}
                onChange={handleInputChange}
              />
            </View>
            <View row justify={"space-between"} width={'100%'}>
              <View align={"flex-start"} marginL>
                <Text>Cpf</Text>
                <Input
                  id="cpf"
                  value={state.cpf}
                  onChange={handleInputChange}
                />
              </View>
              <View align={"flex-start"}>
                <Text>Data de nascimento</Text>
                <Input
                  id="birthDate"
                  value={state.birthDate}
                  onChange={handleInputChange}
                />
              </View>
            </View>
            <View align={"flex-start"} width={'100%'}>
              <Text>Email</Text>
              <Input
                id="email"
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
                  value={state.password}
                  onChange={handleInputChange}
                />
              </View>
              <View align={"flex-start"}>
                <Text>Confirmar senha</Text>
                <Input
                  id="passwordConfirm"
                  password
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
              onClick={goToHome}
            >
              <Text color={colors.red} bold>
                Cancelar
              </Text>
            </Button>
            <Button
              light
              borderWidth={2}
              borderColor={colors.red}
              onClick={() => saveProfile()}
            >
              <Text color={colors.red} bold>
                Salvar
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </Container>
  );
}

export default Profile;

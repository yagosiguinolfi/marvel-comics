import React, { useEffect, useState } from "react";
import { Container, View, Image, Text, Input, Button, Link } from "../../utils/styles";
import { colors } from '../../utils/colors';
import { useNavigate } from "react-router-dom";
import axios from "axios";


import bkgLogin from '../../assets/images/background-login-black.png';
import imgComicsLogo from '../../assets/images/marvel-comics-logo.png';

function Login() {

  // const routes = useRoutes();
  const [state, setState] = useState({ "email": '', 'password': '', 'token': ''});
  const navigate = useNavigate();

  useEffect(() => {
    // axios.post('http://localhost:3333/authenticate', { email: state.email, password: state.password })
    //   .then(res =>
    //     setToken({ "token": res.token }));

    // const headers = { "Authorization": `Bearer ${token}` };

    // axios.get('http://localhost:3333/projects', {}, { headers })
    //   .then(res => {
    //     if (res.ok)
    //       routes.push('/');
    //   });
  }, []);

  function goToRegister() {
    // routes.push('/register');
  }

  function authLogin() {
    axios.post('/authenticate', { email: state.email, password: state.password }, {})
      .then(async function (response) {
        localStorage.setItem( 'token', response.data.token)
      })
      .catch(function (error) {
        console.log('Erro:', error)
      });


    const headers = { authorization: 'Bearer ' + localStorage.getItem('token')  };

    axios.get('/projects', { headers })
      .then(function (response) {
        if (response.data.ok) navigate('/');
      });
  }

  function handleInputChange(event) {
    const { id, value } = event.target;
    setState({ ...state, [id]: value });
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
            <Input id="email" value={state.email} onChange={handleInputChange} />
            <Text bold>Senha</Text>
            <Input type="password" value={state.password} id="password" onChange={handleInputChange} />
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

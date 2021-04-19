import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Container, Text, View, View as Content, Input, Button } from "../../utils/styles";
import { Image } from "./styles";
import { colors } from "../../utils/colors";

import bkgApp from "../../assets/images/background-login-black.png";
import imgComicsLogo from "../../assets/images/marvel-comics-logo.png";
import HeaderBar from "../../components/HeaderBar";

const initialState = {
  page: {
    id: "comics",
    text: "Comics",
  },
};

function Home({ match }) {

  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  // useEffect(() => {
  //   async function fetchData() {
  //     await fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=100`)
  //       .then(res => {
  //         return res.json();
  //       }).then((jsonParsed) => {
  //         console.log(jsonParsed);
  //       });

  //   }
  //   const response = fetchData();
  //   setData(response.data);
  // }, []);

  function goToLogin() {
    navigate('login');
  }

  function goToPage(page) {
    navigate(page);
  }

  function changePage({ id, text }) {
    setState({ ...state, page: { id, text } });
    goToPage('/'+ id)
  }

  function renderButton(params) {
    return (
      <Button
        id={params.id}
        large
        borderWidth={2}
        borderColor={colors.red}
        height={100}
        onClick={() => changePage(params)}
      >
        <Text size={42} light bold>
          {params.text}
        </Text>
      </Button>
    );
  }

  return (
    <Container backgroundImage={bkgApp}>
      <HeaderBar />
      <View
        width={"80%"}
        minHeight={"100%"}
        radius={20}
        column
      >
        <Image src={imgComicsLogo} width={100} />
        <View
          row
          justify={"space-evenly"}
          width={"60%"}
          height={"180px"}
          absolute
          style={{ top: 0 }}
        >
          {renderButton({ 'id': 'comics', 'text': 'Comics' })}
          {renderButton({ 'id': 'characters', 'text': 'Characters' })}
        </View>
      </View>
    </Container>
  );
}

export default Home;

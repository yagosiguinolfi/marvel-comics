import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Container, Text, Input } from "../../utils/styles";
import { View, ViewBkg, Image, Button, Favorite } from "./styles";
import { colors } from "../../utils/colors";

import bkgComics from "../../assets/images/background-login-black.png";
import imgComicsLogo from "../../assets/images/marvel-comics-logo.png";
import { createHash } from "../../config/marvelHash";
import axios from "axios";

const initialState = {
  page: {
    id: "comics",
    text: "Comics",
  },
  data: {}
};

function Comics() {

  const timestamp = Date.now.toString();
  const { md5, apiKey } = createHash(timestamp);
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=20`)
      .then(async function (response) {
        setState({ ...state, data: response.data.data });
      })
      .catch(function (error) {
        console.log('Erro:', error)
      });
  }, []);

  function goToLogin() {
    navigate('login');
  }

  function renderCards(item, index) {
    return (
      <ViewBkg 
      key={item.id} 
      backgroundImage={`${item.thumbnail.path}.${item.thumbnail.extension}`}
      onClick={() => console.log('Click')}
      >
      <Text light>{item.title}</Text>
      <Button size={30}></Button>
      <Favorite></Favorite>
      </ViewBkg>
    );
  }


  function renderButton(params) {
    return (
      <Button
        id={params.id}
        large
        borderWidth={2}
        borderColor={colors.red}
        height={100}
        onClick={() => goToLogin()}
      >
        <Text light size={42} light bold>
          {params.text}
        </Text>
      </Button>
    );
  }

  function handleInputChange(event) {
    const { id, value } = event.target;
    setState({ ...state, [id]: value });
  }

  return (
    <View padding={'180px 40px 30px'}>
    <View
    width={'100%'}
    height={'100%'}
    row
    wrap
    color={colors.white}
    justfy={'space-evenly'}
  >
    {console.log(state.data.results)}
      {state.data.results && state.data.results.map(
        (item, index) =>
          renderCards(item, index)
      )}

    </View>
    </View>
  );
}

export default Comics;

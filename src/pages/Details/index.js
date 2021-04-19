import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Text, View, View as Content, Input, Button } from "../../utils/styles";
import { BackButton, Favorite, Image, ViewBkg, ViewCard } from "./styles";
import axios from "axios";
import { colors } from "../../utils/colors";

import bkgApp from "../../assets/images/background-login-black.png";
import imgComicsLogo from "../../assets/images/marvel-comics-logo.png";
import { TiArrowBackOutline } from "@react-icons/all-files/ti/TiArrowBackOutline";
import { FaHeartBroken } from "@react-icons/all-files/fa/FaHeartBroken";
import { createHash } from "../../config/marvelHash";


function Details() {

  const timestamp = Date.now.toString();
  const { md5, apiKey } = createHash(timestamp);
  const [state, setState] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=10`)
      .then(async function (response) {
        await setState({ ...state, character: response.data.data.results[0] });
      })
      .catch(function (error) {
        console.log('Erro:', error)
      });
  }, []);

  function goToLogin() {
    navigate('login');
  }

  function returnPage() {
    return (
      <BackButton dark size={50} onClick={() => navigate('/characters')}>
        <TiArrowBackOutline size={36} color={colors.white} />
      </BackButton>
    );
  }

  function renderDetails() {
    return (
      <ViewCard>
        <ViewBkg
          backgroundImage={`${state.character.thumbnail.path}.${state.character.thumbnail.extension}`}
        >
          <Favorite dark size={30} >
            <FaHeartBroken size={20} color={colors.red} />
          </Favorite>
        </ViewBkg>
        <Text width={160} dark bold>{state.character.name}</Text>
      </ViewCard>
    );
  }

  return (
    <Container backgroundImage={bkgApp}>
      <View
        width={"80%"}
        minHeight={"100%"}
        radius={20}
        column
        color={colors.white}
      >
        <Image src={imgComicsLogo} width={100} />
        {returnPage()}
        <Content width={'600px'} height={'400px'}>
          {/* {state.character && renderDetails()} */}

        </Content>
      </View>
    </Container>
  );
}

export default Details;

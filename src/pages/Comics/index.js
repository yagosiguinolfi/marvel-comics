import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Container, Text, View } from "../../utils/styles";
import { ViewCard, ViewBkg, Button, Favorite, BackButton } from "./styles";
import { colors } from "../../utils/colors";
import { FaHeartBroken } from '@react-icons/all-files/fa/FaHeartBroken';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';

import bkgApp from "../../assets/images/background-login-black.png";
import imgComicsLogo from "../../assets/images/marvel-comics-logo.png";
import { createHash } from "../../config/marvelHash";
import axios from "axios";
import HeaderBar from "../../components/HeaderBar";
import { Image } from "../Home/styles";
import { TiArrowBackOutline } from "@react-icons/all-files/ti/TiArrowBackOutline";
import { TiArrowForwardOutline } from "@react-icons/all-files/ti/TiArrowForwardOutline";

const initialState = {
  page: {
    id: "comics",
    text: "Comics",
  },
  data: {},
};

function Comics() {

  const timestamp = Date.now.toString();
  const { md5, apiKey } = createHash(timestamp);
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=100`)
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

  function returnPage() {
    return (
      <BackButton dark size={50} onClick={() => navigate('/')}>
        <TiArrowBackOutline size={36} color={colors.white} />
      </BackButton>
    );
  }

  function renderCards(item, index) {
    return (
      <ViewCard>
        <ViewBkg
          key={item.id}
          backgroundImage={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          onClick={() => console.log('Click')}
        >
          <Button dark size={30} >
            <TiArrowForwardOutline size={20} color={colors.white} />
          </Button>
          <Favorite dark size={30} >
            <FaHeartBroken size={20} color={colors.red} />
          </Favorite>
        </ViewBkg>
        <Text width={160} dark>{item.title}</Text>
      </ViewCard>
    );
  }

  return (
    <Container backgroundImage={bkgApp}>
      <HeaderBar />
      <View
        width={"80%"}
        minHeight={"100%"}
        column
      >
        <View
          padding={'180px 40px 30px'}
          width={'100%'}
          height={'100%'}
          radius={20}
          row
          wrap
          color={colors.white}
          justfy={'space-evenly'}
        >
          <Image src={imgComicsLogo} width={100} />
          {returnPage()}
          {console.log(state.data.results)}
          {state.data.results && state.data.results.map(
            (item, index) =>
              renderCards(item, index)
          )}

        </View>
      </View>
    </Container>
  );
}

export default Comics;

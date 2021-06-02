import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { createHash } from "../../config/marvelHash";
import { Container, Text, View } from "../../utils/styles";
import { ViewCard, ViewBkg, Button, Favorite, BackButton, Image } from "../Comics/styles";
import { colors } from "../../utils/colors";
import { TiArrowForwardOutline } from "@react-icons/all-files/ti/TiArrowForwardOutline";
import { FaHeartBroken } from "@react-icons/all-files/fa/FaHeartBroken";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";


import bkgApp from "../../assets/images/background-login-black.png";
import imgComicsLogo from "../../assets/images/marvel-comics-logo.png";
import { TiArrowBackOutline } from "@react-icons/all-files/ti/TiArrowBackOutline";
import HeaderBar from "../../components/HeaderBar";

const initialState = {
  page: {
    id: "characters",
    text: "Characters",
  },
  data: {},
  favorites: [],
  currentFavorite: ''
};

function Characters() {

  const timestamp = Date.now.toString();
  const { md5, apiKey } = createHash(timestamp);
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=100`)
      .then(async function (response) {
        await setState({ ...state, data: response.data.data });
      })
      .catch(function (error) {
        console.log('Erro:', error)
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8080/favorites', {})
      .then(async function (response) {
        await setState({ ...state, favorites: response.data });
      })
      .catch(function (error) {
        console.log('Erro:', error)
      });
  }, [state.currentFavorite]);

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

  function favoriteItem(favItem) {
    const favorited = state.favorites.some(item => item.marvel_id === favItem.id);
    if(favorited){
      axios.delete('http://localhost:8080/favorites', { 'id': favorited.id })
      .then(async function (response) {
        console.log(response.data)
        if(response.data.id)
        setState({...state, currentFavorite: favorited})
      })
      .catch(function (error) {
        console.log('Erro:', error)
      });

    }else{
    axios.post('http://localhost:8080/favorites', { 'user_id': localStorage.getItem('user_id'), marvel_type: 'characters', marvel_id: favItem.id })
      .then(async function (response) {
        console.log(response.data)
        if(response.data.id)
        setState({...state, currentFavorite: favItem})
      })
      .catch(function (error) {
        console.log('Erro:', error)
      });
    }
  }


  function openDetails(item) {
    navigate(`/details/${item.id}`, { state: { ...state, character: item } });
  }

  function renderHearth(id) {
    if (state.favorites.find(item => item.marvel_id === id))
      return <FaHeart size={20} color={colors.red} />
    return <FaHeartBroken size={20} color={colors.red} />

  }

  function renderCards(item, index) {
    return (
      <ViewCard>
        <ViewBkg
          key={item.id}
          backgroundImage={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          onClick={() => console.log('Click')}
        >
          <Button dark size={30} onClick={() => openDetails(item)}>
            <TiArrowForwardOutline size={20} color={colors.white} />
          </Button>
          <Favorite dark size={30} onClick={() => favoriteItem(item)}>
            {renderHearth(item.id)}
          </Favorite>
        </ViewBkg>
        <Text width={160} dark bold>{item.name}</Text>
      </ViewCard>
    );
  }

  function handleInputChange(event) {
    const { id, value } = event.target;
    setState({ ...state, [id]: value });
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
          {state.data.results && state.data.results.map(
            (item, index) =>
              renderCards(item, index)
          )}

        </View>
      </View>
    </Container>
  );
}

export default Characters;

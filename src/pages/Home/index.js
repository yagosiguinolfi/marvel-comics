import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Text, View, Input, Button } from "../../utils/styles";
import { Image } from "./styles";
import { colors } from "../../utils/colors";

import bkgRegister from "../../assets/images/background-login-black.png";
import imgComicsLogo from "../../assets/images/marvel-comics-logo.png";

const initialState = {
  page: {
    id: "comics",
    text: "Comics",
  },
};

function Home() {
  let history = useHistory();

  const [state, setState] = useState(initialState);

  function goToLogin() {
    history.push(`/`);
  }

  function goToPage(page) {
    history.push(`/${page}`);
  }

  function changePage({id, text}) {
    setState({ ...state, page: { id, text} });
    goToPage(id);
  }

  return (
    <Container backgroundImage={bkgRegister}>
      <View
        width={"80%"}
        height={"100%"}
        radius={20}
        column
        color={colors.white}
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
          <Button
            id="comics"
            large
            borderWidth={2}
            borderColor={colors.red}
            height={100}
            onClick={() => changePage({ id: 'comics', text: 'Comics' })}
          >
            <Text size={42} light bold>
              Comics
            </Text>
          </Button>
          <Button
            id="characters"
            large
            borderWidth={2}
            borderColor={colors.red}
            height={100}
            onClick={() => changePage({ id: 'characters', text: 'Characters' })}
          >
            <Text size={42} light bold>
              Characters
            </Text>
          </Button>
        </View>
        <View>
          <Text size={42} dark bold>
            {state.page.text}
          </Text>
        </View>
      </View>
    </Container>
  );
}

export default Home;

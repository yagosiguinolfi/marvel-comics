import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Text, View, View as Content, Input, Button } from "../../utils/styles";
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

function Home({params}) {
  // let routes = useRoutes();

  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  function goToLogin() {
    // routes.push(`/`);
  }

  function goToPage(page) {
    navigate(page);
  }

  function changePage({id, text}) {
    setState({ ...state, page: { id, text} });
    goToPage(id)
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
        <Content>
          <Text size={42} dark bold>
            {state.page.text}
          </Text>
        </Content>
      </View>
    </Container>
  );
}

export default Home;

import React from "react";
import { Container as Content, View} from "../../utils/styles";
import { Image } from "./styles";
import { colors } from "../../utils/colors";

import bkgApp from "../../assets/images/background-login-black.png";
import imgComicsLogo from "../../assets/images/marvel-comics-logo.png";
import HeaderBar from "../../components/HeaderBar";


function Container(props) {

  return (
    <Content backgroundImage={bkgApp}>
      <HeaderBar />
      <View
        width={"80%"}
        minHeight={"100%"}
        radius={20}
        column
        color={colors.white}
      >
        <Image src={imgComicsLogo} width={100} />
        {props.children}
      </View>
    </Content>
  );
}

export default Container;

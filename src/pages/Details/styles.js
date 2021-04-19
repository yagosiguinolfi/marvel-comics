import styled from 'styled-components';
import { View as UView, Image as UImage, Button as UButton } from '../../utils/styles';

export const BackButton = styled(UButton)`
  position: absolute;
  left: 5px;
  top: 5px;
`;


export const Icon = styled(UImage)`
`;

export const Favorite = styled(UButton)`
  position: absolute;
  left: 5px;
  bottom: 5px;
`;

export const ViewCard = styled(UView)`
  max-height: 300px;
  min-height: 300px;
  height: 300px;
  max-width: 180px;
  min-width: 180px;
  width: 180px;
  align-items: center;
  justify-content: flex-start;
  margin: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  padding: 0;
`;

export const ViewBkg = styled(UView)`
  max-height: 250px;
  min-height: 250px;
  height: 250px;
  max-width: 180px;
  min-width: 180px;
  width: 180px;
  background-image: url(${({ backgroundImage }) => backgroundImage ? process.env.PUBLIC_URL + backgroundImage : ''});
  padding: 0;
  background-size: cover;
  border-radius: 5px;
`;

export const Image = styled(UImage)`
  position: absolute;
  top: 20px;
  right: 20px;
`;



import styled from 'styled-components';
import { View as UView, Image as UImage} from '../../utils/styles';


export const View = styled(UView)`
  margin: ${({margin, marginL}) => margin ? margin : marginL ? '0 10px 0 0' : 0 };
  position: relative;
`;


export const Image = styled(UImage)`
  position: absolute;
  top: 20px;
  left: 20px;
`;



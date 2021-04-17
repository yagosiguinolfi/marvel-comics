import styled from 'styled-components';
import { colors } from './colors';
import '../assets/fonts/index.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 92vh;
  width: auto;
  align-items:center;
  justify-content:center;
  background-image: url(${({ backgroundImage }) => backgroundImage ? process.env.PUBLIC_URL + backgroundImage : ''}); //./assets/images/background-login.jpg
  background-repeat: repeat;  
  margin:${({ margin }) => margin || 0};
  padding:${({ padding }) => padding || '30px 50px'};

`;

export const View = styled.div`
  display: flex;
  position: ${({ absolute }) => absolute ? 'absolute' : 'relative'};
  flex-direction: ${({ row, column }) => row ? 'row' : 'column'};
  flex-wrap: ${({ wrap }) => `${wrap}` || 'nowrap'};
  align-items:${({ align }) => align || 'center'};
  justify-content:${({ justify }) => justify || 'center'};
  height:${({ height }) => height || 'auto'};
  width:${({ width }) => width || 'auto'};
  background-color: ${({ color }) => color || ''};
  border-radius: ${({ radius }) => radius || 0}px;
  margin:${({ margin }) => margin || 0};
  padding:${({ padding }) => padding || 0};
`;

export const Image = styled.img`
  position: ${({position}) => position || 'relative'};
  width: ${({ width }) => width || 'auto'}px;
  height: ${({ height }) => height || 'auto'}px;
`;

export const Text = styled.p`
  font-size: ${({ size }) => size || 15}px;
  color:${({ light, dark, color }) => light ? colors.white : dark ? colors.black : color ? color : colors.black};
  font-weight: ${({ bold, italic }) => bold ? 'bold' : italic ? 'italic' : 'normal'};
  margin:${({ margin, marginV, marginH }) => margin ? margin : marginV ? '5px 0' : marginH ? '0 5px' : 0};
  padding:${({ padding }) => padding || 0};
  width: ${({ width }) => width || 'auto'}px;
  height: ${({ height }) => height || 'auto'}px;
  font-family: "Marvel";
`;

export const Link = styled.a`
  font-size: ${({ size }) => size || '15px'};
  color:${({ light, dark, color }) => light ? colors.white : dark ? colors.black : color ? color : colors.black};
  font-weight: ${({ bold, italic }) => bold ? 'bold' : italic ? 'italic' : 'normal'};
  margin:${({ margin }) => margin || '5px'};
  padding:${({ padding }) => padding || 0};
  width: ${({ width }) => width || 'auto'}px;
  height: ${({ height }) => height || 'auto'}px;
  font-family: "Marvel";
  cursor: pointer;
`;

export const Input = styled.input`
  margin:${({ margin }) => margin || 0};
  padding:${({ padding }) => padding || 0};
  width: ${({ width }) => width || 120 }px;
  height: ${({ height }) => height || 18 }px;
  font-family: "Marvel";
  border: 0;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
  outline: 0;
  :focus{
    border-bottom: 1px solid #ff0000;
    transition: 0.6s;
  }
`;


export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin:${({ margin }) => margin || '5px'};
  padding:${({ padding }) => padding || 0}; 
  width: ${({ width, large, small }) => width ? width : large ? '200' : small ? '80' : '120'}px;
  height: ${({ height }) => height || '36'}px;
  background-color:${({ light, dark, bkgColor }) => light ? colors.white : dark ? colors.black : bkgColor ? bkgColor : colors.red};
  border-radius: 5px;
  border-color: ${({borderColor}) => borderColor || ''};
  border-width: ${({borderWidth})=> borderWidth || 0}px;
  box-shadow: 5px 5px 5px grey;
  cursor: pointer;
  outline: 0;
`;
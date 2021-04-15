import styled from 'styled-components';
import { colors } from './colors';
import '../assets/fonts/index.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  align-items:center;
  justify-content:center;
  background-image: url(${({ backgroundImage }) => backgroundImage ? process.env.PUBLIC_URL + backgroundImage : ''}); //./assets/images/background-login.jpg
  background-repeat: repeat;
`;

export const View = styled.div`
  display: flex;
  flex-direction: ${({ row, column }) => row ? 'row' : 'column'};
  flex-wrap: ${({ wrap }) => `${wrap}` || 'nowrap'};
  align-items:${({ align }) => align || 'center'};
  justify-content:${({ justify }) => justify || 'center'};
  height:${({ height }) => height || 'auto'};
  width:${({ width }) => width || 'auto'};
  background-color: ${({ color }) => color || ''};
  border-radius: ${({ radius }) => radius || 0};
  margin:${({ margin }) => margin || 0};
  padding:${({ padding }) => padding || 0};
`;

export const Image = styled.img`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
`;

export const Text = styled.p`
  font-size: ${({ size }) => size || '15px'};
  color:${({ light, dark, color }) => light ? colors.white : dark ? colors.black : color ? color : colors.black};
  font-weight: ${({ bold, italic }) => bold ? 'bold' : italic ? 'italic' : 'normal'};
  margin:${({ margin }) => margin || '5px'};
  padding:${({ padding }) => padding || 0};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  font-family: "Marvel";
`;

export const Link = styled.a`
  font-size: ${({ size }) => size || '15px'};
  color:${({ light, dark, color }) => light ? colors.white : dark ? colors.black : color ? color : colors.black};
  font-weight: ${({ bold, italic }) => bold ? 'bold' : italic ? 'italic' : 'normal'};
  margin:${({ margin }) => margin || '5px'};
  padding:${({ padding }) => padding || 0};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  font-family: "Marvel";
  cursor: pointer;
`;

export const Input = styled.input`
  margin:${({ margin }) => margin || 0};
  padding:${({ padding }) => padding || 0};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
`;


export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin:${({ margin }) => margin || '5px'};
  padding:${({ padding }) => padding || 0}; 
  width: ${({ width, large, small }) => width ? width : large ? '200px' : small ? '80px' : '120px'};
  height: ${({ height }) => height || '36px'};
  color:${({ light, dark, color }) => light ? colors.white : dark ? colors.black : color ? color : colors.red};
  border-radius: 5px;
  border-color: ${({borderColor}) => borderColor || ''};
  border-width: ${({borderWidth})=> borderWidth || 0};
  box-shadow: 5px 5px 5px grey;


`;
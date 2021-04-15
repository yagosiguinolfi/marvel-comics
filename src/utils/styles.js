import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  align-items:center;
  justify-content:center;
  background-image: url(${process.env.PUBLIC_URL + './assets/images/background-login.jpg'});
  background-repeat: repeat;
`;

export const View = styled.div`
  display: flex;
  align-items:${({align}) => align || 'center'};
  justify-content:${({justify}) => justify || 'center'};
  height:${({height}) => height || 'auto'};
  width:${({width}) => width || 'auto'};
  background-color: ${({color}) => color || ''};
  border-radius: ${({radius}) => radius || 0};
`;

export const Image = styled.img`
  width: ${({width}) => width || 'auto' };
  height: ${({height}) => height || 'auto' };
`;
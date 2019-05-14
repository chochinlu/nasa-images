import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin:0;
    padding: 0;
    box-sizing: inherit;    
  }

  html {
    font-family: "Lato", sans-serif;
    font-size: 62.5%;
    font-weight: 400;
    line-height: 1.5;
    box-sizing: border-box;
  }
`;

export const Main = styled.div`
  padding: 1rem;
  /* border: 1px solid red; */
`;

export const Info = styled.h3`
  font-size: 3rem;
  margin: 1rem;
`;

export const Button = styled.button`
  color: white;
  background-color: #ff4081;
  font-size: 3rem;
  padding: 5px 20px;
  border: none;
  margin-right: 1rem;
  border: 2px solid white;
`;

export const InvertButton = styled(Button)`
  color: #ff4081;
  background-color: white;
  border-color: #ff4081;
`;

export const SearchWrapper = styled.div`
  background-color: orange;
  padding: 2rem;
  color: white;

  input {
    padding: 5px 10px;
    font-size: 3rem;
    margin-right: 2rem;
    border: 2px solid white;
    color: white;
    background-color: transparent;
    ::placeholder {
      color: white;
    }
  }
`;

export const Gallery = styled.div`
  padding: 1.5rem;
`;

export const Thumbnail = styled.img`
  margin: 0.5rem;
  max-width: 250px;
  max-height: 150px;
`;

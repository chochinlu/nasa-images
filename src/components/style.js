import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin:0;
    padding: 0;
    outline: none;
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* padding: 1rem; */
  /* border: 1px solid red; */
`;

export const Result = styled.div`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const Info = styled.h3`
  color: ${props => props.theme.colors.textLight};
  font-size: 3rem;
  margin: 1rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
`;

export const Button = styled.button`
  color: white;
  background-color: ${props => props.theme.colors.accent};
  font-size: 3rem;
  padding: 5px 20px;
  margin-right: 1rem;
  border: 2px solid white;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`;

export const NextButton = styled(Button)`
  flex: 1;
  margin: 0;
`;

export const InvertButton = styled(Button)`
  color: #ff4081;
  background-color: white;
  border-color: #ff4081;
`;

export const SearchWrapper = styled.div`
  background-color: ${props => props.theme.colors.primaryDark};
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

export const PreBlock = styled.pre`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  margin: 1.5rem 0.5rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.textLight};
`;

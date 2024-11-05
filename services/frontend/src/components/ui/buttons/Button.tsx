import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../theme";

interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  padding: 3px 24px;
  font-size: 16px;
  background-color: #1c874d;
  color: #f5f5f5;
  border: none;
  border-radius: 24px;
  font-weight: 400;
  line-height: 29px;
  text-align: center;

  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const Button: React.FC<ButtonProps> = ({ primary, children }) => {
  return <StyledButton primary={primary}>{children}</StyledButton>;
};

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Button primary>Primary Button</Button>
  </ThemeProvider>
);

export default App;

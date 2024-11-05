import { css } from "styled-components";

export default css`
  body {
    font-family: ${(props) => props.theme.fontFamily || "Arial, sans-serif"};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    line-height: 1.5;
  }
  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  img {
    max-width: 100%;
  }
`;

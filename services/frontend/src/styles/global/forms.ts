// src/styles/forms.ts
import { css } from "styled-components";

export default css`
  input,
  textarea,
  select,
  button {
    font-family: inherit;
    font-size: ${(props) => props.theme.fontSizes.medium};
    line-height: 1.5;
    padding: ${(props) => props.theme.spacing.small};
    margin: 0;
    border: 1px solid ${(props) => props.theme.colors.border || "#ccc"};
    border-radius: 4px;
    box-sizing: border-box;
  }

  input:focus,
  textarea:focus,
  select:focus,
  button:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 2px
      ${(props) => props.theme.colors.focusOutline || "rgba(98, 0, 234, 0.2)"};
  }

  label {
    display: block;
    margin-bottom: ${(props) => props.theme.spacing.small};
    font-weight: 600;
  }

  .form-group {
    margin-bottom: ${(props) => props.theme.spacing.medium};
  }
`;

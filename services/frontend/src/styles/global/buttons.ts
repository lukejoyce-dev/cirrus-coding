// src/styles/buttons.ts
import { css } from "styled-components";

export default css`
  .btn {
    padding: ${(props) => props.theme.spacing.small}
      ${(props) => props.theme.spacing.medium};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: 500;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
  }

  .btn-primary {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.buttonTextPrimary};
  }

  .btn-primary:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }

  .btn-secondary {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.buttonTextSecondary};
  }

  .btn-secondary:hover {
    background-color: ${(props) => props.theme.colors.secondaryHover};
  }

  .btn-disabled {
    background-color: ${(props) => props.theme.colors.disabledBackground};
    color: ${(props) => props.theme.colors.disabledText};
    cursor: not-allowed;
  }

  .btn:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.focusOutline};
  }
`;

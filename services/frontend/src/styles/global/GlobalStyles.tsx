import { createGlobalStyle } from "styled-components";
import reset from "./reset";
import typography from "./typography";
import forms from "./forms";
import grid from "./grid";
import buttons from "./buttons";
import utilities from "./utilities";
import baseStyles from "./baseStyles";

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${baseStyles}
  ${typography}
  ${forms}
  ${grid}
  ${buttons}
  ${utilities}
`;

export default GlobalStyles;

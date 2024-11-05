import { css } from "styled-components";

export default css`
  /* Import Lato from Google Fonts */
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
  /* Import Inter from Google Fonts */
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
  /* Import Inter from Google Fonts */
  @import url("https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap");
  /* Import Ubuntu from Google Fonts */
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap");

  body {
    font-family: "Lato", sans-serif;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight: bold;
    margin: ${(props) => props.theme.spacing.medium} 0;
    font-family: "Lato", sans-serif;
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight: 600;
    margin: ${(props) => props.theme.spacing.medium} 0;
    font-family: "Lato", sans-serif;
  }

  h3 {
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: 600;
    margin: ${(props) => props.theme.spacing.medium} 0;
    font-family: "Lato", sans-serif;
  }

  h4 {
    font-size: ${(props) => props.theme.fontSizes.small};
    font-weight: normal;
    margin: ${(props) => props.theme.spacing.small} 0;
    font-family: "Lato", sans-serif;
  }

  p {
    line-height: 1.6;
    font-size: ${(props) => props.theme.fontSizes.medium};
    margin: ${(props) => props.theme.spacing.small} 0;
    font-family: "Lato", sans-serif;
  }

  small {
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.textMuted || "#666"};
    font-family: "Lato", sans-serif;
  }

  strong {
    font-weight: bold;
    font-family: "Lato", sans-serif;
  }

  em {
    font-style: italic;
    font-family: "Lato", sans-serif;
  }

  blockquote {
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-style: italic;
    border-left: 4px solid ${(props) => props.theme.colors.primary};
    margin: ${(props) => props.theme.spacing.medium} 0;
    padding-left: ${(props) => props.theme.spacing.medium};
    font-family: "Lato", sans-serif;
  }
`;

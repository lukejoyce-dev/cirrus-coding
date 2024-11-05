import styled from "styled-components";

interface GridProps {
  gap?: string;
  columns?: string;
  marginBottom?: string;
  maxWidth?: string;
}

const Grid = styled.div<GridProps>`
  display: grid;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  gap: ${({ gap }) => gap || "16px"};
  grid-template-columns: ${({ columns }) => columns || "1fr"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "0"};

  /* Small devices (phones, up to 600px) */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: ${({ gap }) => gap || "8px"};
  }

  /* Medium devices (tablets, 600px to 768px) */
  @media (min-width: 600px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ gap }) => gap || "12px"};
  }

  /* Large devices (small desktops, 768px to 1200px) */
  @media (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr; /* Three columns */
    gap: ${({ gap }) => gap || "16px"};
  }

  /* Extra-large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    grid-template-columns: ${({ columns }) =>
      columns || "1fr 1fr 1fr 1fr"}; /* Four columns */
    gap: ${({ gap }) => gap || "16px"};
  }
`;

export default Grid;

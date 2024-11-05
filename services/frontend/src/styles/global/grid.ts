import { css } from "styled-components";

export default css`
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .col {
    padding: 8px;
    flex: 1;
  }

  .col-1 {
    flex: 0 0 8.33%;
  }
  .col-2 {
    flex: 0 0 16.66%;
  }
  .col-3 {
    flex: 0 0 25%;
  }
  .col-4 {
    flex: 0 0 33.33%;
  }
  .col-6 {
    flex: 0 0 50%;
  }
  .col-12 {
    flex: 0 0 100%;
  }

  @media (max-width: 768px) {
    .col,
    .col-1,
    .col-2,
    .col-3,
    .col-4,
    .col-6,
    .col-12 {
      flex: 0 0 100%;
    }
  }
`;

import { css } from "styled-components";

export default css`
  /* Margin and padding utilities */
  .m-0 {
    margin: 0 !important;
  }
  .mt-1 {
    margin-top: 4px !important;
  }
  .mt-2 {
    margin-top: 8px !important;
  }
  .mb-1 {
    margin-bottom: 4px !important;
  }
  .mb-2 {
    margin-bottom: 8px !important;
  }
  .p-0 {
    padding: 0 !important;
  }
  .pt-1 {
    padding-top: 4px !important;
  }
  .pt-2 {
    padding-top: 8px !important;
  }
  .pb-1 {
    padding-bottom: 4px !important;
  }
  .pb-2 {
    padding-bottom: 8px !important;
  }

  /* Text alignment */
  .text-left {
    text-align: left !important;
  }
  .text-center {
    text-align: center !important;
  }
  .text-right {
    text-align: right !important;
  }

  /* Visibility utilities */
  .hidden {
    display: none !important;
  }
  .visible {
    display: block !important;
  }

  /* Flex utilities */
  .flex {
    display: flex;
  }
  .flex-column {
    flex-direction: column;
  }
  .align-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-between {
    justify-content: space-between;
  }
`;

import { styled } from "styled-components";

export const WidgetWrapper = styled.div`
  padding: 7px 30px;
  background-color: ${(props) => props.theme.colors.panel};
  color: ${(props) => props.theme.colors.text};
  border-radius: 14px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

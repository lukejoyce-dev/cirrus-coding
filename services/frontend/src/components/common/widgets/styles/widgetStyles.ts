import { styled } from "styled-components";

export const WidgetContent = styled.div`
  height: 75%;
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 2px;
  img {
    margin-top: 10px;
  }
`;

export const Title = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: bold;
  margin-bottom: 0;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
  color: #71717a;
`;

import React from "react";
import styled from "styled-components";

interface WidgetProps {
  children: React.ReactNode;
  title: string;
  style?: React.CSSProperties;
}

const WidgetWrapper = styled.div`
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

const WidgetContent = styled.div`
  height: 75%;
  width: 120px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 2px;
  img {
    margin-top: 10px;
  }
`;

const Title = styled.p`
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

const Widget: React.FC<WidgetProps> = ({ children, title, style }) => (
  <WidgetWrapper style={style}>
    <WidgetContent>
      {children}
      <Title>{title}</Title>
    </WidgetContent>
  </WidgetWrapper>
);

export default Widget;

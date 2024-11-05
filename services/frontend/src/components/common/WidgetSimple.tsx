import React from "react";
import styled from "styled-components";

interface WidgetSimpleProps {
  children: React.ReactNode;
  title: string;
  style?: React.CSSProperties;
}

const WidgetWrapper = styled.div`
  padding: 8px 30px;
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

const Title = styled.p`
  margin: 6px 0 0 0;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #71717a;
`;

const WidgetSimple: React.FC<WidgetSimpleProps> = ({
  children,
  title,
  style,
}) => (
  <WidgetWrapper style={style}>
    {children}
    <Title>{title}</Title>
  </WidgetWrapper>
);

export default WidgetSimple;

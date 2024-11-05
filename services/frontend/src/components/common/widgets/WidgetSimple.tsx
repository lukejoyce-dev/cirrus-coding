import React from "react";
import { Title } from "./styles/widgetSimple";
import { WidgetWrapper } from "./styles/sharedStyles";

interface WidgetSimpleProps {
  children: React.ReactNode;
  title: string;
  style?: React.CSSProperties;
}

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

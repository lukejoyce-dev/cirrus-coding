import React from "react";
import { Title, WidgetContent } from "./styles/widgetStyles";
import { WidgetWrapper } from "./styles/sharedStyles";

interface WidgetProps {
  children: React.ReactNode;
  title: string;
  style?: React.CSSProperties;
}
const Widget: React.FC<WidgetProps> = ({ children, title, style }) => (
  <WidgetWrapper style={style}>
    <WidgetContent>
      {children}
      <Title>{title}</Title>
    </WidgetContent>
  </WidgetWrapper>
);

export default Widget;

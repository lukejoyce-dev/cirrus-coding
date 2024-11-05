import React from "react";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.layout.contentWidth};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.layout.paddingHorizontal};
  display: flex;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;

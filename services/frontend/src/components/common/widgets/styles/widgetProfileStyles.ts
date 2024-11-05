import { styled } from "styled-components";

export const WidgetProfileWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.panel};
  padding: 35px 22px;
  border-radius: 14px;
  color: ${(props) => props.theme.colors.text};
  max-width: 100%;
  text-align: left;
  flex: 0 1 auto;
  display: flex;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

export const Avatar = styled.div`
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: 99999px;
  overflow: hidden;
  width: 136px;
  height: 136px;
  margin: 10px 34px 15px 15px;
  background: ${(props) => props.theme.colors.primary};
`;

export const ProfileWrapper = styled.div`
  flex: 1;
`;

export const ProfileText = styled.p`
  color: #cecece;
  margin: ${(props) => props.theme.spacing.small} 0;
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin: 2px 0;
  font-size: 20px;
  &:first-of-type {
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes.large};
    margin: 0;
    font-size: 28px;
    font-weight: 500;
    color: #ffffff;
  }
  &:last-of-type {
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes.small};
    margin: 0 0 10px 0;
    font-size: 16px;
    font-weight: 400;
    color: #bababa;
  }
`;

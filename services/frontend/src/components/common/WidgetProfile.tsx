import React from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import { Meter } from "../../types/meter";

interface WidgetProfileProps {
  data?: Meter;
  styles?: React.CSSProperties;
}

const WidgetProfileWrapper = styled.div`
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

const Avatar = styled.div`
  padding: ${(props) => props.theme.spacing.medium};
  border-radius: 99999px;
  overflow: hidden;
  width: 136px;
  height: 136px;
  margin: 12px 34px 15px 15px;
`;

const ProfileWrapper = styled.div`
  flex: 1;
`;

const ProfileText = styled.p`
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

const WidgetProfile: React.FC<WidgetProfileProps> = ({ styles, data }) => {
  const eventsCount =
    data?.commsHub.events.length && data?.commsHub.events.length - 1;
  return (
    <WidgetProfileWrapper style={styles}>
      <Avatar>
        <img src={data?.avatar} alt="avitar" />
      </Avatar>
      <ProfileWrapper>
        <ProfileText>
          {data?.firstName} {data?.lastName}
        </ProfileText>
        <ProfileText>
          {data?.address.firstLine}, {data?.address.postCode}
        </ProfileText>
        <ProfileText>{eventsCount} events</ProfileText>
        {data?.hasSmartMeter && <Button />}
      </ProfileWrapper>
    </WidgetProfileWrapper>
  );
};

export default WidgetProfile;

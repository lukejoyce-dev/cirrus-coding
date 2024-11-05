import React from "react";
import Button from "../../ui/Button";
import { Meter } from "../../../types/meter";
import {
  Avatar,
  ProfileText,
  ProfileWrapper,
  WidgetProfileWrapper,
} from "./styles/widgetProfileStyles";

interface WidgetProfileProps {
  data?: Meter;
  styles?: React.CSSProperties;
}

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

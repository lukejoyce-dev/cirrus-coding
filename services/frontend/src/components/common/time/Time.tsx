import React from "react";
import styled from "styled-components";

interface TimeProps {
  time: string;
}

const TimeWrapper = styled.div`
  width: 128px;
  height: 53px;
  background: #9ab642;
  box-shadow: 0px 4px 1px 0px #00000040 inset;
`;

const Time: React.FC<TimeProps> = ({ time }) => (
  <TimeWrapper>{/* <p>{time}</p> */}</TimeWrapper>
);

export default Time;

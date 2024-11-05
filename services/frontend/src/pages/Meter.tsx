import React from "react";
import { useParams } from "react-router-dom";
import Widget from "../components/common/Widget";
import WidgetProfile from "../components/common/WidgetProfile";
import Layout from "../components/layout/Layout";
import Grid from "../components/ui/Grid";
import useDataFetcher from "../hooks/useDataFetcher";
import { Meter as IMeter } from "../types/meter";
import styled from "styled-components";
import WidgetSimple from "../components/common/WidgetSimple";
import Time from "../components/common/Time";
import { Container } from "../components/layout/Container";

const MeterPage = styled.div`
  margin-top: 40px;
`;

const EncodedText = styled.p`
  margin: 0;
  font-family: "Courier Prime", monospace;
  font-size: 22px;
  font-weight: 400;
  line-height: 26.95px;
  text-align: center;
  color: #8f8f97;
`;

const ModelText = styled.p`
  margin: 0;
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #71717a;
  text-align: center;
`;

const Meter: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useDataFetcher<IMeter>(
    `http://localhost:3000/meter/${id}`
  );

  const gap = 17;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>No data found.</p>;

  const { commsHub } = data;

  const renderLogo = (logoBase64: string | undefined, fallbackText: string) =>
    logoBase64 ? (
      <img src={`data:image/svg+xml;base64,${logoBase64}`} alt="Logo" />
    ) : (
      <p>{fallbackText}</p>
    );

  return (
    <MeterPage>
      <Container>
        <Layout>
          <Grid
            columns="45% 1fr 1fr 1fr"
            gap={`${gap}px`}
            marginBottom={`${gap}px`}
          >
            <WidgetProfile data={data} />
            <Widget title={"Make / Model"}>
              <div>
                {renderLogo(
                  commsHub.manufacturer.logoBase64,
                  "No logo available"
                )}
                <ModelText>{commsHub.manufacturer.model}</ModelText>
              </div>
            </Widget>
            <Widget title={"Supplier"}>
              {renderLogo(commsHub.supplier.logoBase64, "No logo available")}
            </Widget>
            <Widget title={"Signal"}>
              <p>{Math.round(commsHub.signal * 100) / 100 || "N/A"}</p>
            </Widget>
          </Grid>
        </Layout>
        <Layout>
          <Grid columns="196px 1fr" gap={`${gap}px`} marginBottom={`${gap}px`}>
            <Widget title={"Device time"}>
              <Time time={commsHub.deviceTime} />
            </Widget>
            <div>
              <Grid
                columns="1fr 1fr"
                gap={`${gap}px`}
                marginBottom={`${gap}px`}
              >
                <WidgetSimple title={"IPv6 Address"}>
                  <EncodedText>{commsHub.ipv6 || "N/A"}</EncodedText>
                </WidgetSimple>
                <WidgetSimple title={"IMEI"}>
                  <EncodedText>{commsHub.imei || "N/A"}</EncodedText>
                </WidgetSimple>
              </Grid>
              <Grid columns="1fr 1fr" gap={`${gap}px`} marginBottom="0">
                <WidgetSimple title={"ICC"}>
                  <EncodedText>{commsHub.icc || "N/A"}</EncodedText>
                </WidgetSimple>
                <WidgetSimple title={"MSISDN"}>
                  <EncodedText>{commsHub.msisdn || "N/A"}</EncodedText>
                </WidgetSimple>
              </Grid>
            </div>
          </Grid>
        </Layout>
      </Container>
    </MeterPage>
  );
};

export default Meter;

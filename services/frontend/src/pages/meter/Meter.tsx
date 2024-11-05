import React from "react";
import { useParams } from "react-router-dom";
import Widget from "../../components/common/widgets/Widget";
import WidgetProfile from "../../components/common/widgets/WidgetProfile";
import Layout from "../../components/layout/Layout";
import Grid from "../../components/ui/Grid";
import useDataFetcher from "../../hooks/useDataFetcher";
import { Meter as IMeter } from "../../types/meter";
import WidgetSimple from "../../components/common/widgets/WidgetSimple";
import Time from "../../components/common/time/Time";
import { Container } from "../../components/layout/Container";
import { EncodedText, MeterPage, ModelText } from "./meterStyles";

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

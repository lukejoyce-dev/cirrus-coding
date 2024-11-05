type EventType = "Power Outage" | "Reset" | "Reboot" | "Power Restore";

interface Event {
  type: EventType; // Now restricted to specific strings
  timestamp: string;
}
export interface Meter {
  guid: string;
  avatar: string;
  firstName: string;
  lastName: string;
  hasSmartMeter: boolean;
  address: {
    firstLine: string;
    postCode: string;
  };
  commsHub: {
    events: Event[];
    signal: number;
    ipv6: string;
    imei: string;
    deviceTime: string;
    icc: string;
    msisdn: string;
    manufacturer: {
      name: string;
      model: string;
      logoBase64: string;
    };
    supplier: {
      name: string;
      logoBase64: string;
    };
  };
}

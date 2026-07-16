export type Port = {
  id: string;
  slug: string;
  name: string;
  region: string;
  label: string;
  lon: number;
  lat: number;
  brief: string;
  content: string;
  metric: string;
};

export const PORTS: Port[] = [
  {
    id: "houston",
    slug: "houston-america",
    name: "Houston Port",
    region: "America",
    label: "Houston Port — America",
    lon: -95.37,
    lat: 29.76,
    brief:
      "A major North American energy hub for crude and refined product storage and distribution.",
    content:
      "Our terminal in Houston, one of the largest energy hubs in the world, is crucial for petroleum product storage and distribution in North America. The Houston terminal is well-equipped to handle both inbound and outbound shipments of crude oil and refined products, serving the needs of refineries, chemical plants, and international markets.",
    metric: "North America hub",
  },
  {
    id: "rotterdam",
    slug: "rotterdam-europe",
    name: "Rotterdam Port",
    region: "Europe",
    label: "Rotterdam Port — Europe",
    lon: 4.48,
    lat: 51.92,
    brief:
      "Deepwater European gateway for crude oil supply, transit, and pipeline distribution.",
    content:
      "The port of Rotterdam is a very convenient choice for the supply and transit of crude oil in Europe. The crude oil in Rotterdam comes mainly from the Middle East and the North Sea region. Since the tank terminals are located directly on deep water and Rotterdam has no locks or tides, Rotterdam can accommodate even the largest oil tankers such as ULCCs and supertankers with a capacity of 500,000 DWT. Through an extensive network of pipelines, the crude oil is transported efficiently and safely to the refineries.",
    metric: "ULCC capable",
  },
  {
    id: "jurong",
    slug: "jurong-singapore",
    name: "Jurong Port",
    region: "Singapore",
    label: "Jurong Port — Singapore",
    lon: 103.72,
    lat: 1.3,
    brief:
      "Asia-Pacific petroleum storage and bunkering connectivity at one of the world’s great trading ports.",
    content:
      "The Jurong terminal in Singapore serves as a vital hub for petroleum product storage and distribution in the Asia-Pacific region. With Singapore being one of the world’s largest trading and bunkering ports, our terminal here offers unrivaled connectivity to global markets and plays a key role in facilitating the energy trade in Asia.",
    metric: "Asia trading hub",
  },
  {
    id: "ningbo",
    slug: "ningbo-china",
    name: "Ningbo Port",
    region: "China",
    label: "Ningbo Port — China",
    lon: 121.55,
    lat: 29.87,
    brief:
      "Strategic Asia-Pacific petrochemical logistics at the crossroads of global trade routes.",
    content:
      "Ningbo China Terminal’s prime location offers unparalleled access to key shipping routes in the Asia-Pacific region. Positioned at the crossroads of global trade, the terminal connects major markets in Asia, Europe, and the Middle East, making it an essential hub for international petrochemical logistics.",
    metric: "Cross-trade access",
  },
  {
    id: "fujairah",
    slug: "fujairah-middle-east",
    name: "Fujairah Port",
    region: "Middle East",
    label: "Fujairah Port — Middle East",
    lon: 56.33,
    lat: 25.12,
    brief:
      "World-class storage and logistics support in one of the busiest oil trading hubs.",
    content:
      "Located in the heart of the Middle East, our Fujairah terminal offers world-class storage and logistical support for the region’s booming oil and gas industry. As one of the world’s busiest oil storage and trading hubs, the Fujairah terminal provides services essential for the import and export of petroleum products across the Arabian Gulf, Asia, and Africa.",
    metric: "Gulf trading hub",
  },
  {
    id: "johor",
    slug: "johor-malaysia",
    name: "Johor Port",
    region: "Malaysia",
    label: "Johor Port — Malaysia",
    lon: 103.88,
    lat: 1.46,
    brief:
      "Tank storage for inbound and outbound crude oil and petrochemical product flows.",
    content:
      "Our tank storage facility at Johor terminal port is well equipped to handle both inbound and outbound shipments of crude oil and petrochemical products.",
    metric: "Regional tank farm",
  },
];

export function getPortBySlug(slug: string) {
  return PORTS.find((p) => p.slug === slug);
}

export function getPortById(id: string) {
  return PORTS.find((p) => p.id === id);
}

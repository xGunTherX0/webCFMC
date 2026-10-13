import client from "@/tina/__generated__/client";
import type {
  AboutQuery,
  ContactQuery,
  HomeQuery,
  ServicesConnectionQuery,
  SettingsQuery,
} from "@/tina/__generated__/types";

export type TinaResponse<T> = {
  data: T;
  variables: object;
  query: string;
};

export type ServiceNode = NonNullable<
  NonNullable<
    ServicesConnectionQuery["servicesConnection"]["edges"]
  >[number]
>["node"];

export async function getSettings(): Promise<TinaResponse<SettingsQuery>> {
  return client.queries.settings({ relativePath: "index.json" });
}

export async function getHome(): Promise<TinaResponse<HomeQuery>> {
  return client.queries.home({ relativePath: "index.json" });
}

export async function getAbout(): Promise<TinaResponse<AboutQuery>> {
  return client.queries.about({ relativePath: "index.json" });
}

export async function getContact(): Promise<TinaResponse<ContactQuery>> {
  return client.queries.contact({ relativePath: "index.json" });
}

export async function getServices(): Promise<ServiceNode[]> {
  const res = await client.queries.servicesConnection({
    sort: "order",
    first: 50,
  });
  const edges = res.data.servicesConnection.edges ?? [];
  return edges
    .map((edge) => edge?.node)
    .filter((node): node is NonNullable<ServiceNode> => node != null);
}

export type PageQueries = {
  settings: TinaResponse<SettingsQuery>;
  home: TinaResponse<HomeQuery>;
  about: TinaResponse<AboutQuery>;
  contact: TinaResponse<ContactQuery>;
  services: TinaResponse<ServicesConnectionQuery>;
};

export async function getPageData(): Promise<PageQueries> {
  const [settings, home, about, contact, services] = await Promise.all([
    client.queries.settings({ relativePath: "index.json" }),
    client.queries.home({ relativePath: "index.json" }),
    client.queries.about({ relativePath: "index.json" }),
    client.queries.contact({ relativePath: "index.json" }),
    client.queries.servicesConnection({ sort: "order", first: 50 }),
  ]);

  return { settings, home, about, contact, services };
}

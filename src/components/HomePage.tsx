"use client";

import { useTina } from "tinacms/dist/react";
import type {
  AboutQuery,
  ContactQuery,
  HomeQuery,
  ServicesConnectionQuery,
  SettingsQuery,
} from "@/tina/__generated__/types";
import type { ServiceNode } from "@/lib/tina";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ServicesSection } from "./Services";
import { AboutSection } from "./About";
import { ContactSection } from "./Contact";
import { Footer } from "./Footer";

type TinaProps<T> = {
  query: string;
  variables: object;
  data: T;
};

export default function HomePage(props: {
  settings: TinaProps<SettingsQuery>;
  home: TinaProps<HomeQuery>;
  about: TinaProps<AboutQuery>;
  contact: TinaProps<ContactQuery>;
  services: TinaProps<ServicesConnectionQuery>;
}) {
  const { data: settingsData } = useTina({
    query: props.settings.query,
    variables: props.settings.variables,
    data: props.settings.data,
  });
  const { data: homeData } = useTina({
    query: props.home.query,
    variables: props.home.variables,
    data: props.home.data,
  });
  const { data: aboutData } = useTina({
    query: props.about.query,
    variables: props.about.variables,
    data: props.about.data,
  });
  const { data: contactData } = useTina({
    query: props.contact.query,
    variables: props.contact.variables,
    data: props.contact.data,
  });
  const { data: servicesData } = useTina({
    query: props.services.query,
    variables: props.services.variables,
    data: props.services.data,
  });

  const services = (servicesData.servicesConnection.edges ?? [])
    .map((edge) => edge?.node)
    .filter((node): node is NonNullable<ServiceNode> => node != null);

  return (
    <>
      <Header
        siteName={settingsData.settings.siteName}
        logo={settingsData.settings.logo}
        settings={settingsData.settings}
      />
      <main className="flex-1">
        <Hero home={homeData.home} />
        <ServicesSection services={services} />
        <AboutSection about={aboutData.about} />
        <ContactSection contact={contactData.contact} />
      </main>
      <Footer settings={settingsData.settings} />
    </>
  );
}

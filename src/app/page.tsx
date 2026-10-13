import { Suspense } from "react";
import { getPageData } from "@/lib/tina";
import HomePage from "@/components/HomePage";

export default async function Page() {
  const queries = await getPageData();

  return (
    <Suspense>
      <HomePage
        settings={{
          query: queries.settings.query,
          variables: queries.settings.variables,
          data: queries.settings.data,
        }}
        home={{
          query: queries.home.query,
          variables: queries.home.variables,
          data: queries.home.data,
        }}
        about={{
          query: queries.about.query,
          variables: queries.about.variables,
          data: queries.about.data,
        }}
        contact={{
          query: queries.contact.query,
          variables: queries.contact.variables,
          data: queries.contact.data,
        }}
        services={{
          query: queries.services.query,
          variables: queries.services.variables,
          data: queries.services.data,
        }}
      />
    </Suspense>
  );
}

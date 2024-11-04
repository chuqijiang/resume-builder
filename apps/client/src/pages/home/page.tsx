import { t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Helmet } from "react-helmet-async";

import { HeroSection } from "./sections/hero";
import React from "react";


export const HomePage = () => {
  const { i18n } = useLingui();

  return (
    <main className="relative isolate bg-background">
      <Helmet prioritizeSeoTags>
        <html lang={i18n.locale} />

        <title>
          {t`InternUp`} - {t`Connecting International Graduates with U.S. Opportunities`}
        </title>

        <meta
          name="description"
          content="InternUp is a mission-driven social venture focused on connecting international graduates with U.S.-based internships and job opportunities. Our commitment lies in generating social impact over financial gain, building a community of over 7,000 international students within just six months. We proudly partner with over 500 Silicon Valley startups and 40+ public companies, helping them onboard skilled, globally-minded talent. InternUp is dedicated to supporting tech startups in building diverse, early-stage teams with an emphasis on the unique strengths that international graduates bring. This app is an extension of InternUp to help users build and share their resumes easily."
        />
      </Helmet>

      <HeroSection />
    </main>
  );
};
